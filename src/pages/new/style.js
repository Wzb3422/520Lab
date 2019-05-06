import styled from 'styled-components'
import header from './img/header.svg'
import outline from './img/outline.png'
import di from './img/di.svg'
import ti from './img/ti.svg'
import num1 from './img/1.svg'
import num2 from './img/2.svg'
import num3 from './img/3.svg'
import num4 from './img/4.svg'
import num5 from './img/5.svg'
import option from './img/option.svg'
import arrowleft from './img/arrow_l.svg'
import arrowright from './img/arrow_r.svg'

const numArray = [num1, num2, num3, num4, num5]

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

export const Di = styled.div`
  height: 57px;
  width: 57px;
  background: url(${di});
  position: absolute;
  top: 38px;
  left: 26px;
`

export const Num = styled.div`
  height: 36px;
  width: 36px;
  background: url(${props => numArray[props.num - 1]}) no-repeat center;
  position: absolute;
  top: 41px;
  left: 87px;
`

export const Ti = styled.div`
  width: 37px;
  height: 39px;
  position: absolute;
  background: url(${ti});
  top: 38px;
  left: 130px;
`

export const Question = styled.div`
  height: 40px;
  width: 220px;
  position: absolute;
  top: 100px;
  left: 60px;
  word-wrap: normal;
`

export const OptionContainer = styled.div`
  height: 240px;
  position: absolute;
  top: 180px;
  left: 33px;
`

export const Option = styled.div`
  width: 246px;
  height: 50px;
  margin-top: 10px;
  background: url(${option});
  position: relative;
`

export const Label = styled.div`
  height: 20px;
  width: 20px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: 14px;
  left: 8px;
`

export const Text = styled.div`
  height: 20px;
  width: 166px;
  line-height: 20px;
  font-size: 13px;
  position: absolute;
  top: 15px;
  left: 62px;
`

export const Arrow = styled.div`
  height: 65px;
  width: 43px;
  position: absolute;
  top: 273px;
`

export const ArrowLeft = styled(Arrow)`
  left: -16px;
  background: url(${arrowleft});
`

export const ArrowRight = styled(Arrow)`
  right: -12px;
  background: url(${arrowright});
`
