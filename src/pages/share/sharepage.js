import React, { Component } from 'react'
import {
  ShareWrapper,
  Box,
  Img,
  QRcodeBox
} from './style'
import QRCode from 'qrcode.react'
import { connect } from 'react-redux'

class sharepage extends Component {
  render() {
    return (
      <ShareWrapper>
        <Box>
          <Img/>
          <QRcodeBox>
            <QRCode value={`http://localhost:3000/login?setid=${this.props.setid}`} size={84} />
          </QRcodeBox>
        </Box>
      </ShareWrapper> 
    )
  }
}

const mapStateToProps = state => {
  return {
    setid: state.whisper.set_id
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sharepage)
