import React from 'react';
import {
  Card,
  Details,
  EmptyBox,
  Name,
  Rate,
  Similarity,
  Tip,
  TipText,
  InitiatedWarpper
} from '../style'
import { Link } from 'react-router-dom'

function Iinitiated(props) {
  let { list } = props
  return (
    <InitiatedWarpper active={props.active}>
      {
        list.length === 0 ?
          <Tip>
            <EmptyBox/>
            <TipText size={"large"}>档案是空的</TipText>
            <TipText size={"small"}>快去发起新的研究叭 ੭ ᐕ)੭*⁾⁾</TipText>
          </Tip>
          : list.map((item) => (
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
    </InitiatedWarpper>
  );
}

export default Iinitiated;