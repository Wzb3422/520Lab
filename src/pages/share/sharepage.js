import React, { Component } from 'react'
import {
  ShareWrapper,
  Box,
  Img,
  QRcodeBox
} from './style'
import QRCode from 'qrcode.react'

class sharepage extends Component {
  render() {
    return (
      <ShareWrapper>
        <Box>
          <Img/>
          <QRcodeBox>
            <QRCode value={`hello world`} size={84} />
          </QRcodeBox>
        </Box>
      </ShareWrapper> 
    )
  }
}

export default sharepage
