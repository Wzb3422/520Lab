import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  PosterWrapper,
  PosterImg
} from './style'

class Posterpage extends Component {
  render() {
    return (
      <PosterWrapper>
        <PosterImg index={this.props.index}></PosterImg>
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
