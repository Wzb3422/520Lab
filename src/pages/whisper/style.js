import styled from 'styled-components'
import title from './img/title.png'
import card from './img/card.svg'
import redbtn from './img/redbtn.svg'
import whitebtn from './img/whitebtn.svg'

export const WhisperWarpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  width: 308px;
  height: 84px;
  margin-top: 53px;
  background: url(${title});
  background-size: 100% 100%;
`

export const Box = styled.div`
  height: 239px;
  width: 300px;
  margin-top: 20px;
  background: url(${card});
`

export const Input = styled.textarea.attrs({
  placeholder: '你想说点什么呢?'
})`
  width: 255px;
  height: 190px;
  resize: none;
  box-sizing: border-box;
  padding: 5px;
  outline: none;
  border: none;
  margin: 14px 18px;
  background: #f8f8f8;
`

export const WhiteBtn = styled.div`
  height: 79px;
  width: 237px;
  margin-top: 45px;
  background: url(${whitebtn});
  font-size: 24px;
  font-weight: bold;
  line-height: 72px;
  text-align: center;
`

export const RedBtn = styled.div`
  height: 59px;
  width: 227px;
  margin-top: 17px;
  background: url(${redbtn});
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  line-height: 62px;
  text-align: center;
`
