import styled from 'styled-components'
import pa from './img/1.jpg'
import pb from './img/2.jpg'
import pc from './img/3.jpg'
import pd from './img/4.jpg'

export const PosterWrapper = styled.div`
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

export const PosterImg = styled.img.attrs({
  src: pa
})`
  height: 564px;
  width: 380px;
`