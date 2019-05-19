import styled from 'styled-components'
import largeButton from './img/largeButton.svg'

const urlArray = [
  'https://ncustatic.ncuos.com/index/1558261577665.poster1.jpg',
  'https://ncustatic.ncuos.com/index/1558261560098.poster2.jpg',
  'https://ncustatic.ncuos.com/index/1558261592305.poster3.jpg',
  'https://ncustatic.ncuos.com/index/1558261600792.poster4.jpg'
]
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

export const PosterImg = styled.div`
  height: 660px;
  width: 380px;
  background: url(${props => urlArray[props.index]}) no-repeat;
  background-size: 100%;
  position: relative;
`

export const QRcodeBox = styled.div`
  position: absolute;
  top: 416px;
  right: 56px;
`

export const NewBtn1 = styled.div`
  position: absolute;
  top: 544px;
  height: 62px;
  width: 302px;
  left: 45px;
  background: url(${largeButton});
  line-height: 58px;
  font-weight: bold;
  text-align: center;
`

export const NewBtn2 = styled.div`
  position: absolute;
  top: 610px;
  height: 62px;
  width: 302px;
  left: 45px;
  background: url(${largeButton});
  line-height: 58px;
  font-weight: bold;
  text-align: center;
`

export const Qoute = styled.div`
  position: absolute;
  top: 496px;
  right: 50px;
  font-size: 8px;
  line-height: 11px;
  height: 11px;
  width: 86px;
  color: #fff;
  text-align: center;
`
