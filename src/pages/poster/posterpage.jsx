import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  PosterWrapper,
  PosterImg,
  QRcodeBox,
  NewBtn1,
  NewBtn2,
  Qoute,
  Alert,
  Text,
  BackGround,
  Cancel
} from './style'
import QRCode from 'qrcode.react'
import {
  Link,
  Redirect
} from 'react-router-dom'

class Posterpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow :false
    }
  }

  static showMiddleWare(fn) {
    return fn ? null : "none"
  }
  render() {
    const {isShow} = this.state;
    const Show = Posterpage.showMiddleWare;
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
            <NewBtn2 onClick={()=>this.setState({isShow:true})}>查看留言</NewBtn2>
        </PosterImg>
        {this.props.token === '' ? <Redirect to="/login/" /> : null}
        <BackGround style={{display : Show(isShow)}}/>
        <Alert style={{display : Show(isShow)}}>
          <Text>{this.props.message}</Text>
          <Cancel onClick={()=>this.setState({isShow:false})}>关闭</Cancel>
        </Alert>
      </PosterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.poster.score,
    message: state.poster.message,
    index: state.poster.index,
    token: state.login.token
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
