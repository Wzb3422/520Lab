import styled from 'styled-components'
import title from './img/title.svg'
import leftactive from './img/po.svg'
import rightactive from './img/po2.svg'

export const ArchiveWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 313px;
  height: 76px;
  margin-top: 24px;
  background: url(${title}) no-repeat;
  position: relative;
`

export const LeftActive = styled.div`
  width: 150px;
  height: 54px;
  background: url(${leftactive}) no-repeat;
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 19px;
  color: #fff;
  line-height: 50px;
  text-align: center;
`

export const RightActive = styled.div`
  height: 41px;
  width: 135px;
  background: url(${rightactive}) no-repeat;
  position: absolute;
  right: 10px;
  top: 18px;
  font-size: 19px;
  color: #fff;
  line-height: 40px;
  text-align: center;
`