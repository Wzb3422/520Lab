import React, { Component } from 'react';
import {
  ArchiveWarpper,
  Title,
  LeftActive,
  RightActive
} from './style'
import { connect } from 'react-redux'
class Archive extends Component {
  render() {
    return (
      <ArchiveWarpper>
        <Title>
          <LeftActive>发起的研究</LeftActive>
          <RightActive>参与的研究{this.props.active}</RightActive>
        </Title>
      </ArchiveWarpper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.archive.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
