import styled from 'styled-components'
import card from './img/card.svg'
import outline from './img/outline.svg'
import title from './img/title.svg'
import num1 from './img/1.png'
import num2 from './img/2.png'
import num3 from './img/3.png'
import num4 from './img/4.png'
import num5 from './img/5.png'
import sticker from './img/sticker.svg'

const numArray = [num1, num2, num3, num4, num5]

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
  filter: drop-shadow(0 0 10px rgba(58, 58, 58, .27));
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Box = styled.div`
  height: 604px;
  width: 351px;
  background: url(${outline}) no-repeat;
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
  top: 36px;
  left: 13px;
`

export const Card = styled.div`
  height: 101px;
  width: 313px;
  background: url(${card});
  position: relative;
`

export const Num = styled.div`
  width: 19px;
	height: 27px;
	font-size: 38px;
  font-weight: bold;
  background: url(${props => numArray[props.num]});
  background-size: 100% 100%;
  position: absolute;
  left: 36px;
  top: 43px;
`

export const Question = styled.div`
  height: 18px;
  width: 168px;
  line-height: 18px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 51px;
  letter-spacing: 1px;
  font-size: 13px;
  color: #fff;
  overflow: hidden;
  word-wrap: normal;
  text-overflow: ellipsis;
`

export const YourAnswerBox = styled.div`
  height: 19px;
  width: 206px;
  position: absolute;
  bottom: 40px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const YourAnswerLeft = styled.div`
  width: 54px;
  height: 14px;
  font-size: 10px;
  line-height: 14px;
`

export const YourAnswerRight = styled.div`
  max-width: 130px;
  height: 19.16px;
  display: flex;
  align-items: center;  
`

export const Sticker = styled.div`
  width: 19.16px;
  height: 19.16px;
  background: url(${sticker});
  margin: auto 8px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const YourChoice = styled.div`
  height: 14px;
  margin: auto 0 auto 1px;
  font-size: 13px;
  color: #fff;
`

export const YourAnswer = styled.div`
  flex: 1;
  font-size: 10px;
  line-height: 16px;
  height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: .8px;
`

export const HisAnswer = styled.div`
  width: 202px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 17px;
  left: 86px;
  color: #fff;
`

export const HisAnswerText = styled.div`
  width: 56px;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: .6px;
`

export const HisAnswerRight = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 17px;
  max-width: 123px;
`

export const HisAnswerOption = styled.div`
  width: 10px;
  font-size: 13px;
  font-weight: 700;
  float: left;
  margin: auto 11px auto 2px;
`

export const HisAnswerContent = styled.div`
  flex: 1;
  font-size: 10px;
  line-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: .8px;
`
