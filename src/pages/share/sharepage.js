import React, {Component} from 'react'
import {Box, Img, QRcodeBox, ShareWrapper,} from './style'
import QRCode from 'qrcode.react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ClipboardButton from 'react-clipboard.js';

const button = {
  display: 'block',
  fontSize: '15px',
  lineHeight: '32px',
  width: '320px',
  borderRadius:'17px',
  textAlign: 'center',
  margin: '12px auto 0 auto',
  background: '#393939',
  letterSpacing: '.4px',
  color: '#fff',
}

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
            <QRCode value={`https://520.ncuos.com/login?setid=${this.props.setid}`} size={86}/>
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
