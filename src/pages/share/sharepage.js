import React, {Component} from 'react'
import {Box, Img, QRcodeBox, ShareWrapper,} from './style'
import QRCode from 'qrcode.react'
<<<<<<< HEAD
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Clipboard from 'react-clipboard.js';
=======
import {connect} from 'react-redux'
import ClipboardButton from 'react-clipboard.js';

const button = {
  display: 'block',
  fontSize: '15px',
  lineHeight: '35px',
  width: '200px',
  borderRadius: '6px',
  textAlign: 'center',
  margin: '12px auto 0 auto',
  background: '#fff',
  letterSpacing: '.4px',
}
>>>>>>> 4872f8a37a0bcf8f866783dd74f469143edee4c5

class sharepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCopy: false
    }
  }

  showAlert() {
    this.setState({isCopy: true})
  }

  render() {
    const {isCopy} = this.state;
    return (
      <ShareWrapper>
        <Box>
          <Img/>
          <ClipboardButton style={button} onClick={() => this.showAlert()}
                           data-clipboard-text={"https://520.ncuos.com/login?setid=" + this.props.setid}>
            {isCopy === false ? "点击复制问卷链接" : "已复制 现在分享给TA吧~"}
          </ClipboardButton>
          <QRcodeBox>
            <QRCode value={`https://520.ncuos.com/login?setid=${this.props.setid}`} size={84}/>
          </QRcodeBox>
        </Box>
        {this.props.token === '' ? <Redirect to="/login/" /> : null}        
      </ShareWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    setid: state.whisper.set_id,
    token: state.login.token
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(sharepage)
