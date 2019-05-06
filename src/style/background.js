import styled from 'styled-components'

export const Grid = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: 
     repeating-linear-gradient(
        45deg, 
        #2e2e2e 0%, 
        #2e2e2e .2%, 
        rgba(0, 0, 0, 0) .2%, 
        rgba(0, 0, 0, 0) 5.5%
     ), 
     repeating-linear-gradient(
        -45deg, 
        #2e2e2e 0%, 
        #2e2e2e .2%, 
        rgba(0, 0, 0, 0) .2%,
        rgba(0, 0, 0, 0) 5.5%
     );
  opacity: .11;
  z-index: -7;
`

export const Imge = styled.div`
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
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 37%,
        rgba(255,77,124,0.96) 37%,
        rgba(255,77,124,0.96) 63%,
        rgba(0,0,0,0) 63%,
        rgba(0,0,0,0) 100%
     );
  z-index: -6;
`
