import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  HomeWarpper,
  Content,
  Box,
  Logo,
  Btnred,
  Btnblack,
  Name
} from './style'
import { connect } from 'react-redux'

class Homepage extends Component {
  render() {
    return (
      <HomeWarpper>
        <Content>
          <Box>
            <Logo/>
            <Name>{this.props.name}</Name>
          </Box>
          <Link to="/new/"><Btnred>发起研究</Btnred></Link>
          <Link to="/archive/"><Btnblack>研究档案</Btnblack></Link>
          <Link to="/answer/">Answer</Link>
        </Content>
      </HomeWarpper>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.login.name,
    setid: state.login.setid
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
