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
class whisperpage extends Component {
  render() {
    return (
      <WhisperWarpper>
        <Content>
          <Header />
          <Box>
            <Input />
          </Box>
          <WhiteBtn>小家园替你写</WhiteBtn>
          <RedBtn>塞入纸条</RedBtn>
        </Content>
      </WhisperWarpper>
    );
  }
}

export default whisperpage
