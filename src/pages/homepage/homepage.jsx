import React, { Component } from 'react';
import {
  HomeWarpper,
  Box,
  Btnred,
  Btnblack
} from './style'

class Homepage extends Component {
  render() {
    return (
      <HomeWarpper>
        <Box></Box>
        <Btnred>发起研究</Btnred>
        <Btnblack>研究档案</Btnblack>
      </HomeWarpper>
    );
  }
}

export default Homepage
