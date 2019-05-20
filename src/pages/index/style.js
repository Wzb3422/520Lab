import styled from 'styled-components'

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
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Prompt = styled.img.attrs({
  src: 'https://ncustatic.ncuos.com/index/1558311759173.kuang.png'
})`
  width: 304px;
  height: 402px;
`

export const Btn = styled.img.attrs({
  src: 'https://ncustatic.ncuos.com/index/1558263685318.jinru.png'
})`
  height: 60px;
  width: 195px;
  margin-top: 40px;
`
