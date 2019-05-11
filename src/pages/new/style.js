import styled, {keyframes} from 'styled-components'
import header from './img/header.svg'
import outline from './img/outline.svg'
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
import switchBtn from './img/switch.svg'

const OpenClose = keyframes` 
    0% {
        transform: scaleY(1);
    }
    5% {
        transform: scaleY(.1);
    }
    10% {
        transform: scaleY(1);
    }
    15% {
        transform: scaleY(.1);
    }
    20% {
        transform: scaleY(1);
    }
`

const MoveLeft = keyframes` 
    0% {
        transform: translateX(-19px);
    }
    50% {
        transform: translateX(-13px);
    }
    100% {
        transform: translateX(-19px);
    }
`

const MoveRight = keyframes` 
    0% {
        transform: translateX(7px)
    }
    50% {
        transform: translateX(1px)
    }
    100% {
        transform: translateX(7px)
    }
`

const move = props => (
  props === "left" ? MoveLeft : MoveRight
)

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
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  height: 223px;
  width: 317px;
  background: url(${header});
  position: absolute;
  top: -50px;
`

export const Box = styled.div`
  width: 333px;
	height: 508px;
  position: relative;
  left: 4px;
  background: url(${outline});
`

export const HeaderText = styled.div`
  position: absolute;
  top: 37px;
  left: 20px;
  width: 150px;
  height: 70px;
`

export const Di = styled.div`
  height: 57px;
  width: 57px;
  background: url(${di});
`

export const Num = styled.div`
  position: absolute;
  left: 59px;
  top: 0;
  height: 36px;
  width: 36px;
  background: url(${props => numArray[props.num - 1]}) no-repeat center;
`

export const LeftEye = styled.div`
  animation: ${OpenClose} 3.4s ease infinite;
  position: absolute;
  right: 86px;
  top: 62px;
  width: 5px;
  height: 10px;
  background: rgb(26,26,26);
  border-radius: 24px / 60px;
`

export const RightEye = styled.div`
  animation: ${OpenClose} 3.4s ease infinite;
  position: absolute;
  right: 68px;
  top: 65px;
  width: 5px;
  height: 10px;
  background: rgb(26,26,26);
  border-radius: 10px / 20px;
`

export const Ti = styled.div`
  position: absolute;
  left: 100px;
  top: 0;
  width: 37px;
  height: 39px;
  background: url(${ti});
`

export const Question = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;  
  align-items: center;
  width: 222px;
  height: 50px;
  top: 99px;
  left: 53px;
`

export const QsText = styled.div`
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: .8px;
  line-height: 17px;
  height: 50px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const OptionContainer = styled.div`
  height: 240px;
  position: absolute;
  top: 180px;
  left: 38px;
  overflow: hidden;
`

export const OptionAnimationWarpper = styled.div`
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
  font-weight: 800;
  font-style: italic;
  top: 14px;
  left: 7px;
`

export const Text = styled.div`
  height: 20px;
  width: 166px;
  line-height: 20px;
  font-size: 13px;
  position: absolute;
  top: 15px;
  left: 62px;
  letter-spacing: .5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Arrow = styled.div`
  height: 65px;
  width: 43px;
  position: absolute;
  top: 246px;
`

export const ArrowLeft = styled(Arrow)`
  animation: ${move("left")} 1.1s ease infinite;
  background: url(${arrowleft});
`

export const ArrowRight = styled(Arrow)` 
  right: -4px;
  animation: ${move("right")} 1.1s ease infinite;
  background: url(${arrowright});
`

export const SwitchBtn = styled.div`
  height: 64px;
  width: 146px;
  background: url(${switchBtn});
  position: absolute;
  left: 92px;
  bottom: -26px;
`

export const SwitchText = styled.div`
  height: 24px;
  width: 100px;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 31px;
`
