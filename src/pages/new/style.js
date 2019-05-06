import styled from 'styled-components'
import header from './img/header.svg'
import outline from './img/outline.png'
import di from './img/di.svg'

export const NewWapper = styled.div`
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

export const Header = styled.div`
  height: 215px;
  width: 317px;
  background: url(${header});
  position: absolute;
  top: -50px;
`

export const Box = styled.div`
  width: 321px;
	height: 496px;
  position: relative;
  background: url(${outline});
`

export const Order = styled.div`
  height: 
`
