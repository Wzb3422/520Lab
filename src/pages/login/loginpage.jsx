import React, {Component} from 'react';
import {
  BottomText,
  Content,
  Filter,
  InputBox,
  InputName,
  LoginBtn,
  LoginWrapper,
  Prompt,
  Title,
  Totem,
  TotemBox
} from './style'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreator} from './store'

class LoginPage extends Component {
  componentDidMount() {
    this.requestIn()
  }

  requestIn() {
    const qs = window.location.href.split('?')[1];
    console.log(qs);
    if (qs) {
      let qsItems = qs.split('&');
      let qsObj = {};
      qsItems.forEach(item => {
        let key = item.split('=')[0];
        qsObj[key] = item.split('=')[1];
      });
      let {setid: id} = qsObj;
      this.props.updateSetId(id)
    }
  }

  render() {
    return (
      <LoginWrapper>
        <TotemBox>
          <Totem position={"right"}/>
          <Totem/>
          <Totem position={"right"}/>
          <Totem/>
          <Totem position={"right"}/>
          <Totem/>
          <Totem position={"right"}/>
          <Totem/>
          <Totem position={"right"}/>
          <Totem/>
        </TotemBox>
        <Filter/>
        <Content>
          <Title/>
          <InputBox>
            <InputName>学号</InputName>
            <input
              type="number"
              placeholder="请输入您的学号"
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
        <BottomText>南昌大学家园工作室巨献</BottomText>
        {this.props.setid === 0 && this.props.token && <Redirect to="/home/"/>}
        {this.props.setid !== 0 && this.props.token && <Redirect to="/answer/"/>}
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
};

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
    updateSetId(id) {
      dispatch(actionCreator.setIdAction(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
