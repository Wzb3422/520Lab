import React, { Component } from 'react'
import {
  ShareWrapper,
  Box,
  Img,
  QRcodeBox,
  Button,
} from './style'
import QRCode from 'qrcode.react'
import { connect } from 'react-redux'
import Clipboard from 'react-clipboard.js';

class sharepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      isCopy: false
    }
  }

  showAlert(){
    this.setState({isCopy : true})
  }

  render() {
    const {isCopy} = this.state;
    return (
      <ShareWrapper>
      二维码出来了 给爷截图!
        <Box>
          <Img/>
          <Clipboard component={Button} onClick={()=>this.showAlert()} data-clipboard-text={"https://520.ncuos.com/login?setid="+this.props.setid}>
            {isCopy === false ? "点击复制问卷链接" : "已复制 现在分享给TA吧~"}
          </Clipboard>
          <QRcodeBox>
            <QRCode value={`https://520.ncuos.com/login?setid=${this.props.setid}`} size={84} />
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
