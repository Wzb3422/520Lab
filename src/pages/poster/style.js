import styled from 'styled-components'

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
  height: 564px;
  width: 380px;
  background: url(${props => urlArray[props.index]}) no-repeat;
  background-size: 100%;
  position: relative;
`

export const QRcodeBox = styled.div`
  position: absolute;
  bottom: 68px;
  right: 56px;
`

export const NewBtn = styled.div`
  position: absolute;
  bottom: -5px;
  left: 126px;
  height: 64px;
  width: 146px;
  background: url(${'https://ncustatic.ncuos.com/index/1558268869151.switch.svg'});
  line-height: 58px;
  font-weight: bold;
  text-align: center;
`