import React, { Component } from 'react'
import {
  Card,
  BigRate,
  BigName,
  JoinWarpper
} from '../style'
import 'animate.css'

class Ijoined extends Component {
  render() {
    return (
      <JoinWarpper
        className={'animated fadeIn'}
        active={this.props.active}>
        {
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
