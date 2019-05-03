import React, { Component } from 'react';
import {
  ArchiveWarpper,
  Title,
  LeftActive,
  RightActive
} from './style'
import { connect } from 'react-redux'
import {
  actionCreator
} from './store'

class Archive extends Component {
  render() {
    return (
      <ArchiveWarpper>
        <Title>
          <LeftActive
            active={this.props.active}
            onClick={(e) => {this.props.switchHeader(e, 0)}}
          >
            发起的研究
          </LeftActive>
          <RightActive
            active={this.props.active}
            onClick={(e) => {this.props.switchHeader(e, 1)}}
          >
            参与的研究
          </RightActive>
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
    switchHeader(e, value) {
      dispatch(actionCreator.switchHeaderAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
