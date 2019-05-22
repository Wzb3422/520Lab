import styled from 'styled-components'
import input from './img/input.svg'
import whitebtn from './img/whitebtn.svg'
import angel from './img/angel_shadow.png'

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  height: 66px;
  width: 228px;
  margin-bottom: 10px;
  background: url('https://ncustatic.ncuos.com/index/1558266589924.rsafcaasdsa.png') no-repeat;
  background-size: 100%;
`

export const InputBox = styled.div`
  height: 61px;
  width: 299px;
  margin-top: 20px;
  background: url(${input});
  position: relative;
  input {
    position: absolute;
    left: 94px;
    top: 22px;
    letter-spacing: .8px;
    background: none;
    color: #fff;
    width: 160px;
    font-size: 16px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
`

export const InputName = styled.div`
  position: absolute;
  top: 12px;
  left: 24px;
  height: 18px;
  width: 40px;
  text-align: center;
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

export const Prompt = styled.div`
  width: 240px;
  height: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 15px;
  text-align: center;
  color: #ff3c79;
  letter-spacing: 1.2px;
`

export const LoginBtn = styled.div`
  height: 60px;
  width: 200px;
  margin-top: 20px;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: url(${whitebtn});
`

export const TotemBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Totem = styled.div`
  height: 110px;
  background: url(${angel}) repeat-x;
  background-size: 120px;
  background-position-x: ${props=>(props.position==="right" && "55px")}; 
`

export const Filter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: 
    linear-gradient(
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 100%
    );
`

export const BottomText = styled.div`
  position: absolute;
  bottom: 18px;
  font-size: 12px;
  color: #858585;
  letter-spacing: 1.6px;
`
