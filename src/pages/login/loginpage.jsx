import React, { Component } from 'react';
import {
  LoginWrapper
} from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Loginpage extends Component {
  render() {
    return (
      <LoginWrapper>
        <input
          type="text"
          placeholder="Username"
          value={this.props.username}
          onChange={this.props.onChangeUsername}
        />
        <input
          type="password"
          placeholder="pwd"
          value={this.props.password}
          onChange={this.props.onChangePassword}
        />
        <button
          onClick={() => (this.props.login(this.props.username, this.props.password))}
        >点我登录</button>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    password: state.login.password
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);