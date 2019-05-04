import React, {Component} from 'react';
import {
  ArchiveWarpper,
  BottomBtn,
  Box,
  Card,
  Container,
  Content,
  Details,
  LeftActive,
  Name,
  Rate,
  RightActive,
  Similarity,
  Tip,
  Title,
  FilterTop,
  FilterButtom
} from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {Link} from 'react-router-dom'

class Archive extends Component {
  render() {
    const List1 = [
      {
        id: "1",
        name: "艺术家",
        similarityRate: "10%",
      },
      {
        id: "2",
        name: "艺术家",
        similarityRate: "20%",
      },
      {
        id: "3",
        name: "艺术家",
        similarityRate: "30%",
      },
      {
        id: "4",
        name: "艺术家",
        similarityRate: "40%",
      },
      {
        id: "5",
        name: "艺术家",
        similarityRate: "50%",
      }
    ];
/*    const List2 = []*/
    return (
      <ArchiveWarpper>
        <Content>
          <Box>
            <Title>
              <LeftActive
                active={this.props.active}
                onClick={(e) => {
                  this.props.switchHeader(e, 0)
                }}
              >
                发起的研究
              </LeftActive>
              <RightActive
                active={this.props.active}
                onClick={(e) => {
                  this.props.switchHeader(e, 1)
                }}
              >
                参与的研究
              </RightActive>
            </Title>
            <FilterTop/>
            <FilterButtom/>
            <Container>
              {
                List1.length === 0 ?
                  <Tip>空空如也 快去发起一个研究吧（运营还在写）</Tip>
                  : List1.map((item) => (
                    <Card key={item.id}>
                      <Name>{item.name}</Name>
                      <Similarity>相似度</Similarity>
                      <Rate>{item.similarityRate}</Rate>
                      <Link to="/detail/">
                        <Details>详细信息</Details>
                      </Link>
                    </Card>
                  ))
              }
            </Container>
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
