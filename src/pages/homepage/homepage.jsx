import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
  HomeWarpper,
  Content,
  Box,
  Logo,
  Btnred,
  Btnblack,
  Name,
  Boy,
  Girl,
  Tips,
  GetToAnswer
} from './style'
import { connect } from 'react-redux'
import {
  actionCreator
} from './store'

class Homepage extends Component {

  static showMiddleWare(fn) {
    return fn ? null : "none"
  }

  render() {
    const Show = Homepage.showMiddleWare
    return (
      <HomeWarpper>
        <Content>
          <Box>
            <Logo/>
            <Boy style={{display: Show(this.props.sex === 1)}}/>
            <Girl style={{display: Show(this.props.sex === 2)}}/>
            <Name>{this.props.name}</Name>
          </Box>
          <Link to="/new/"><Btnred>发起研究</Btnred></Link>
          <Link to="/archive/"><Btnblack>研究档案</Btnblack></Link>
          {
            this.props.everMessage === '你只能回答一次哦' && 
            <Tips>{this.props.everMessage}</Tips>
          }
          {
            this.props.everMessage === '不能回答自己出的题～' &&
            <Link to="/answer/">
              <GetToAnswer onClick={()=>this.props.clearEverMsg()}>自我探索&nbsp;</GetToAnswer>
            </Link>
          }
        </Content>
        {this.props.token === '' ? <Redirect to="/login/" /> : null}
      </HomeWarpper>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.login.name,
    setid: state.login.setid,
    token: state.login.token,
    sex: state.login.sex,
    everMessage: state.login.everMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearEverMsg() { 
      dispatch(actionCreator.clearEverMsgAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
