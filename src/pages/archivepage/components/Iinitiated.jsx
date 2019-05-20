import React, { Component } from 'react';
import {
  Card,
  Details,
  EmptyBox,
  Name,
  Rate,
  Similarity,
  Tip,
  TipText,
  InitiatedWarpper,
  Boy,
  Girl
} from '../style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from '../store'

class Iinitiated extends Component {
  static showMiddleWare(fn) {
    return fn ? null : "none"
  }
  render() {
    const Show = Iinitiated.showMiddleWare;
    return (
      <InitiatedWarpper
        className={'animated fadeIn fast'}
        active={this.props.active}>
        {
          this.props.list.length === 0 ?
            <Tip>
              <EmptyBox/>
              <TipText size={"large"}>档案是空的</TipText>
              <TipText size={"small"}>暂无人回答</TipText>
            </Tip>
            : this.props.list.map((item, index) => (
              <Card
                key={index}
              >
                <Boy style={{display: Show(item.sex === 1)}}/>
                <Girl style={{display: Show(item.sex === 2)}}/>
                <Name>{item.name}</Name>
                <Similarity>相似度</Similarity>
                <Rate>{item.score}%</Rate>
                <Details onClick={() => this.props.onDetailClick(index)}>详细信息</Details>
                {this.props.detailobj.empty ? null :
                  <Redirect to="/detail/" />
                }
              </Card>
            ))
        }
      </InitiatedWarpper>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailobj: state.archive.detailobj,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDetailClick(index) {
      dispatch(actionCreator.detailClickAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Iinitiated);
