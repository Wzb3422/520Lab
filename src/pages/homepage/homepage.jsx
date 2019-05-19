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

const name = "2333333333"
class Homepage extends Component {
  render() {
    return (
      <HomeWarpper>
        <Content>
          <Box>
            <Logo/>
            <Name>{name}</Name>
          </Box>
          <Link to="/new/"><Btnred>发起研究</Btnred></Link>
          <Link to="/archive/"><Btnblack>研究档案</Btnblack></Link>
          <Link to="/answer/">Answer</Link>
        </Content>
      </HomeWarpper>
    );
  }
}

export default Homepage
