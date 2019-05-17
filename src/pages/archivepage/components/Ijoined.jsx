import React from 'react'
import {
  Card,
  BigRate,
  BigName,
  JoinWarpper
} from '../style'
import 'animate.css'

function Ijoined(props) {
  return (
    <JoinWarpper
      className={'animated fadeIn'}
      active={props.active}>
      <Card>
        <BigName>艺术家咯咯咯咯咯</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
      <Card>
        <BigName>艺术家</BigName>
        <BigRate>80%</BigRate>
      </Card>
    </JoinWarpper>
  )
}

export default Ijoined
