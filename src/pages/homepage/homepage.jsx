import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
  Tips
} from './style'
import { connect } from 'react-redux'
import {
  Redirect
} from 'react-router-dom'

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
          <Tips>{this.props.everMessage}</Tips>
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
