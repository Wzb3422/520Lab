import React, { Component } from 'react'
import {
  Card,
  BigRate,
  BigName,
  JoinWarpper,
  Tip,
  EmptyBox,
  TipText
} from '../style'
import 'animate.css'

class Ijoined extends Component {
  render() {
    return (
      <JoinWarpper
        className={'animated fadeIn'}
        active={this.props.active}>
        {
          this.props.IjoinedList.length === 0 ?
          <Tip>
            <EmptyBox/>
            <TipText size={"large"}>档案是空的</TipText>
            <TipText size={"small"}>快去发起新的研究叭 ੭ ᐕ)੭*⁾⁾</TipText>
          </Tip>
          :
          this.props.IjoinedList.map((item, index) => {
            return (
              <Card key={index}>
                <BigName>{item.set_man}</BigName>
                <BigRate>{item.score}%</BigRate>
              </Card>
            )
          })
        }
      </JoinWarpper>
    )
  }
}

export default Ijoined
