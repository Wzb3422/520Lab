import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  PosterWrapper,
  PosterImg,
  QRcodeBox
} from './style'
import QRCode from 'qrcode.react'
class Posterpage extends Component {
  render() {
    return (
      <PosterWrapper>
        <PosterImg index={this.props.index}>
          <QRcodeBox>
            <QRCode value={`http://localhost:3000/login?setid=${this.props.setid}`} size={77} />
          </QRcodeBox>
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
