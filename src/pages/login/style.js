import styled from 'styled-components'
import title from './img/title.svg'
import input from './img/input.svg'
import whitebtn from './img/whitebtn.svg'

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
  background: url(${title});
`

export const InputBox = styled.div`
  height: 61px;
  width: 299px;
  margin-top: 20px;
  background: url(${input});
  position: relative;
  input {
    position: absolute;
    left: 100px;
    bottom: 20px;
    letter-spacing: .8px;
    background: none;
    color: #fff;
    width: 120px;
  }
`

export const InputName = styled.div`
  position: absolute;
  top: 12px;
  left: 22px;
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
  text-align: center;
  color: red;
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
  bottom: 0px;
  right: -20px;
  height: 300px;
  width: 500px;
`

export const Totem = styled.div`
  height: 150px;
  width: 200%;
  background: url('https://ncustatic.ncuos.com/index/1558241808485.{752B9538-72B1-E041-0AB9-0B9C82F9A451}.png');
  background-size: 170px;
  position: relative;
  right: ${props => props.right ? '50px' : '0'};
`