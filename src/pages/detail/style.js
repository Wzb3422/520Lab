import styled from 'styled-components'
import card from './img/card.svg'
import outline from './img/outline.svg'
import title from './img/title.svg'

export const DetailWarpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Box = styled.div`
  height: 607px;
  width: 351px;
  background: url(${outline});
  position: relative;
`

export const Header = styled.div`
  height: 58px;
  width: 172px;
  position: absolute;
  right: 40px;
  top: -24px;
  background: url(${title});
`

export const CardContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 13px;
`

export const Card = styled.div`
  height: 101px;
  width: 313px;
  background: url(${card});
  position: relative;
`

export const Num = styled.div`
  width: 23px;
	height: 45px;
	font-size: 38px;
  font-weight: bold;
  position: absolute;
  left: 36px;
  top: 38px;

`