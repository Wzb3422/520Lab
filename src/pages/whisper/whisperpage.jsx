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

class whisperpage extends Component {

  componentDidMount() {
    this.props.getAlternativesList(this.props.token)
  }
  render() {
    const tips = "戳我";
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
          <RedBtn>塞入纸条</RedBtn>
        </Content>
      </WhisperWarpper>
    );
  }


}

const mapStateToProps = state => {
  return {
    message: state.whisper.message,
    token: state.login.token
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(whisperpage)
