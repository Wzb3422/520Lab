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
import no_arrowleft from './img/no_arrow_l.svg'
import arrowright from './img/arrow_r.svg'
import no_arrowright from './img/no_arrow_r.svg'
import switchBtn from './img/switch.svg'
import angel from './img/angel.png'
import question from './img/question.png'
import alert from './img/alert.svg'
import A_act from './img/A_act.svg'
import B_act from './img/B_act.svg'
import C_act from './img/C_act.svg'
import D_act from './img/D_act.svg'

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

export const Stack = styled.div`
  position:relative
`

export const NewWrapper = styled.div`
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

export const Container = styled.div`
  width: 333px;
	height: 508px;
  position: absolute;
  pointer-events: none;
`

export const Angel = styled.div`
  position: absolute;
  width: 103px;
  height: 95px;
  left: 200px;
  top: 12px;
  background: url(${angel});
`

export const QuestionLogo = styled.div`
  position: absolute;
  width: 115px;
  height: 19px;
  left: 155px;
  top: 111px;
  background: url(${question});
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
  top: 3px;
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

export const QustionContent = styled.div`
  margin: auto 0;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: .8px;
  line-height: 17px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Label = styled.div`
  height: 20px;
  width: 20px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  font-weight: bold;
  font-style: italic;
  top: 15px;
  left: 7px;
`

export const Text = styled.div`
  height: 20px;
  width: 166px;
  line-height: 20px;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 62px;
  letter-spacing: .5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ArrowContainer = styled.div`
  width: 333px;
	height: 508px;
  position: relative;
  pointer-events: none;
`

const Arrow = styled.div`
  height: 65px;
  width: 43px;
  position: absolute;
  top: 246px;
`

export const ArrowLeft = styled(Arrow)`
  animation: ${move("left")} 1.1s ease infinite;
  background: url(${arrowleft});
  pointer-events: auto;
`

export const NoArrowLeft = styled(Arrow)`
  animation: ${move("left")} 1.1s ease infinite;
  background: url(${no_arrowleft});
  position:absolute
`

export const ArrowRight = styled(Arrow)` 
  right: -4px;
  animation: ${move("right")} 1.1s ease infinite;
  background: url(${arrowright});
  pointer-events: auto
`

export const NoArrowRight = styled(Arrow)`
  right: -4px;
  animation: ${move("right")} 1.1s ease infinite;
  background: url(${no_arrowright});
`

export const SwitchBtn = styled.div`
  height: 64px;
  width: 146px;
  background: url(${switchBtn});
  position: absolute;
  left: 92px;
  bottom: -26px;
  pointer-events: auto;
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

export const Alert = styled.div`
  position: absolute;
  width: 350px;
  height: 223px;
  background: url(${alert});
`

export const AlertTitle = styled.div`
  position: absolute;
  top: 71px;
  left: 67px;
  font-size: 24px;
  color: #171717;
  font-weight: 600;
  letter-spacing: 1.5px;
`

export const Sure = styled.div`
  position: absolute;
  top: 135px;
  right: 87px;
  font-size: 21px;
  color: #171717;
  font-weight: 600;
  letter-spacing: 1.5px;
`

export const Cancel = styled.div`
  position: absolute;
  top: 139px;
  left: 77px;
  font-size: 21px;
  color: #171717;
  font-weight: 600;
  letter-spacing: 1.5px;
`

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgba(0,0,0,0.52);
`

export const OptionContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 180px;
  left: 8px;
  text-align: center;
  overflow: hidden;
`

export const Option = styled.div`
  width: 246px;
  height: 50px;
  margin: 14px auto 0 auto;
  background: url(${option});
  position: relative;
  pointer-events: auto
`

export const OptionsLayOut = styled.div`
`

export const ActiveOptionFirst = styled.div`
  position: absolute;
  width: 301.18px;
  height: 65px;
  top: 8px;
  background: url(${A_act});
  z-index: -1;
`

export const ActiveOptionSecond = styled.div`
  position: absolute;
  width: 299.38px;
  height: 66.26px;
  top: 69px;
  left:1px;
  background: url(${B_act});
  z-index: -1;
`

export const ActiveOptionThird = styled.div`
  position: absolute;
  width: 297.33px;
  height: 68.23px;
  top: 137px;
  left: 2.7px;
  background: url(${C_act});
  z-index: -1;
`

export const ActiveOptionForth = styled.div`
  position: absolute;
  width: 295.51px;
  height: 63.97px;
  top: 198px;
  left: 3.5px;
  background: url(${D_act});
  z-index: -1;
`
