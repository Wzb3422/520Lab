import styled from 'styled-components'
import outline from './img/outline.svg'
import btnred from './img/btn-red.svg'
import btnblack from './img/btn-black.svg'

export const HomeWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Box = styled.div`
  height: 356px;
  width: 311px;
  margin-top: 64px;
  background: url(${outline});
`

export const Btnred = styled.div`
  height: 76px;
  width: 206px;
  margin-top: 36px;
  background: url(${btnred});
  font-size: 23px;
  line-height: 76px;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`

export const Btnblack = styled.div`
  height: 58px;
  width: 193px;
  margin-top: 5px;
  background: url(${btnblack});
  font-size: 16px;
  line-height: 58px;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
`