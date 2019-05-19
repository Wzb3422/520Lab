import React, { Component } from 'react';
import {
  WhisperWarpper,
  Content,
  Header,
  Box,
  Input,
  RedBtn,
  WhiteBtn
} from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class whisperpage extends Component {

  componentDidMount() {
    this.props.getAlternativesList(this.props.token)
  }
  render() {
    const tips = "戳这儿留下心里的声音，给彼此一段独一无二的记忆。";
    return (
      <WhisperWarpper>
        <Content>
          <Header/> 
          <Box>
            <Input
              value={this.props.message}
              placeholder={tips}
              onChange={this.props.onInputChange}
            />
          </Box>
          <WhiteBtn
            onClick={this.props.showAlter}
          >小家园替你写</WhiteBtn>
          <RedBtn onClick={() => this.props.postNewQues(this.props.new, this.props.message, this.props.token)}>塞入纸条</RedBtn>
        </Content>
        {this.props.setid !== 0 ? <Redirect to="/share/" /> : null}
        {this.props.token === '' ? <Redirect to="/login/" /> : null}
      </WhisperWarpper>
    );
  }


}

const mapStateToProps = state => {
  return {
    message: state.whisper.message,
    token: state.login.token,
    new: state.new,
    setid: state.whisper.set_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange(e) {
      dispatch(actionCreator.onInputChangeAction(e.target.value))
    },
    getAlternativesList(token) {
      dispatch(actionCreator.getAlternativesAsyncAction(token))
    },
    showAlter() {
      dispatch(actionCreator.showAlterAction())
    },
    postNewQues(newData, message, token) {
      dispatch(actionCreator.postNewQuesAsyncAction(newData, message, token))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(whisperpage)
