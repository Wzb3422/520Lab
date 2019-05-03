import React, { Component } from 'react';
import {
  ArchiveWarpper,
  Content,
  Title,
  LeftActive,
  RightActive,
  Box,
  Card,
  Name,
  Similarity,
  Rate,
  Details,
  BottomBtn
} from './style'
import { connect } from 'react-redux'
import {
  actionCreator
} from './store'
import { Link } from 'react-router-dom'

class Archive extends Component {
  render() {
    return (
      <ArchiveWarpper>
        <Content>
          <Box>
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
            <Card>
              <Name>艺术家</Name>
              <Similarity>相似度</Similarity>
              <Rate>10%</Rate>
              <Link to="/detail/">
                <Details>详细信息</Details>
              </Link>
            </Card>
            <Card>
              <Name>艺术家</Name>
              <Similarity>相似度</Similarity>
              <Rate>10%</Rate>
              <Link to="/detail/">
                <Details>详细信息</Details>
              </Link>
            </Card>
            <Card>
              <Name>艺术家</Name>
              <Similarity>相似度</Similarity>
              <Rate>10%</Rate>
              <Link to="/detail/">
                <Details>详细信息</Details>
              </Link>
            </Card>
            <Card>
              <Name>艺术家</Name>
              <Similarity>相似度</Similarity>
              <Rate>10%</Rate>
              <Link to="/detail/">
                <Details>详细信息</Details>
              </Link>
            </Card>
            <BottomBtn>发起新的研究</BottomBtn>
          </Box>
        </Content>
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
