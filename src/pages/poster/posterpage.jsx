import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  PosterWrapper,
  PosterImg,
  QRcodeBox,
  NewBtn,
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
          <Link to="/new/">
            <NewBtn>发起我的研究&nbsp;</NewBtn>
          </Link>
            <NewBtn>&nbsp;</NewBtn>
          <Qoute>扫码成为研究员</Qoute>
        </PosterImg>
      </PosterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.poster.score,
    index: state.poster.index
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
