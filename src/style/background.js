import styled, { keyframes } from 'styled-components'

const fade = keyframes` 
    0% {
        opacity: 0;
    }
    50% {
        opacity: .13;
    }
    100% {
        opacity: 0;
    }
`

export const Grid = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ${fade} 4s infinite;
  background-image: 
    repeating-linear-gradient(
      45deg, 
      #2e2e2e 0%, 
      #2e2e2e .14%, 
      rgba(255, 255, 255, 0) .14%, 
      rgba(255, 255, 255, 0) 5.5%
    ), 
    repeating-linear-gradient(
      -45deg, 
      #2e2e2e 0%, 
      #2e2e2e .13%, 
      rgba(255, 255, 255, 0) .13%,
      rgba(255, 255, 255, 0) 5.5%
    );
  background-color: #fff;
  overflow:hidden
`

export const Image = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: 
    linear-gradient(
      -25deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 37%,
      rgba(255, 77, 124, 0.96) 37%,
      rgba(255, 77, 124, 0.96) 63%,
      rgba(255, 255, 255, 0) 63%,
      rgba(255, 255, 255, 0) 100%
    );
`
