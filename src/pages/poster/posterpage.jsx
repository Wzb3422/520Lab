import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  PosterWrapper,
  PosterImg,
  QRcodeBox,
  NewBtn1,
  NewBtn2,
  Qoute
} from './style'
import QRCode from 'qrcode.react'
import {
  Link
} from 'react-router-dom'

class Posterpage extends Component {
  render() {
    return (
      <PosterWrapper>
        <PosterImg index={this.props.index}>
          <QRcodeBox>
            <QRCode value={`https://520.ncuos.com/login?setid=${this.props.setid}`} size={77} />
          </QRcodeBox>
          <Qoute>扫码成为研究员</Qoute>
          <Link to="/home/">
            <NewBtn1>返回首页</NewBtn1>
          </Link>
            <NewBtn2>查看留言</NewBtn2>
        </PosterImg>
      </PosterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.poster.score,
    index: state.poster.index,
    whisper: state.poster.whisper
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posterpage)
