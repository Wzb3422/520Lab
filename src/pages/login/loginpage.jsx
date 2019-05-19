import React, { Component } from 'react';
import {
  LoginWrapper,
  Content,
  Title,
  InputBox,
  InputName,
  Prompt,
  LoginBtn,
  Totem,
  TotemBox
} from './style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Loginpage extends Component {

  componentDidMount() {
    const qs = window.location.href.split('?')[1]
    if (qs) {
      let qsItems = qs.split('&')
      let qsObj = {}
      qsItems.map(item => {
        let key = item.split('=')[0]
        let value = item.split('=')[1]
        qsObj[key] = value
        return null
      })
      let { setid: id } = qsObj
      this.props.updateSetid(id)
    }
  }

  render() {
    return (
      <LoginWrapper>
        <TotemBox>
          <Totem />
          <Totem right={true}/>
        </TotemBox>
        <Content>
          <Title />
          <InputBox>
            <InputName>学号</InputName>
            <input
              type="number"
              placeholder="学号"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </InputBox>
          <InputBox>
            <InputName>密码</InputName>
            <input
            type="password"
            placeholder="请输入云家园密码"
            value={this.props.password}
            onChange={this.props.onChangePassword}
          />
          </InputBox>
          <Prompt>{this.props.message}</Prompt>
            <LoginBtn onClick={() => (this.props.login(this.props.username, this.props.password))}>进入研究所</LoginBtn>
        </Content>
        {this.props.setid === 0 && this.props.token ? <Redirect to="/home/"/> : null}
        {this.props.setid !== 0 && this.props.token ? <Redirect to="/answer/"/> : null}
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password,
    token: state.login.token,
    setid: state.login.setid,
    message: state.login.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeUsername(e) {
      dispatch(actionCreator.onUsernameChangeAction(e.target.value))
    },
    onChangePassword(e) {
      dispatch(actionCreator.onPasswordChangeAction(e.target.value))
    },
    login(username, password) {
      dispatch(actionCreator.loginAsyncAction(username, password))
    },
    updateSetid(id) {
      dispatch(actionCreator.setIdAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
