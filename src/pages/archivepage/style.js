import styled from 'styled-components'
import title from './img/title.svg'
import leftactive from './img/po.svg'
import rightactive from './img/po2.svg'
import card from './img/card.svg'
import outline from './img/outline.svg'
import bottombtn from './img/bottom_button.svg'
import emptybox from './img/empty_box.svg'
import bigrate from './img/po3.svg'
import B from  './img/Boy.png'
import G from  './img/Girl.png'

export const Boy = styled.div`
  position: absolute;
  left: 18px;
  top: 4px;
  width: 53px;
  height: 52px;
  background: url(${B});
`

export const Girl = styled.div`
  position: absolute;
  left: 18px;
  top: 4px;
  width: 53px;
  height: 52px;
  background-image: url(${G});
`

export const ArchiveWarpper = styled.div`
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

export const Title = styled.div`
  width: 313px;
  height: 76px;
  background: url(${title}) no-repeat;
  position: absolute;
  top: -20px;
  left: 10px;
`

export const Container = styled.div`
  overflow: auto;
  position: relative;  
  height: 420px;
  top: -13px;
  padding-left: 12px;
`

export const ItemLimit = styled.div`
  height: 860px;
  width: 332px;
  overflow: hidden;
  background: green;
`

export const Tip = styled.div`
  text-align: center;
  position: relative;
  top: 124px;
  font-size: 16px;
  width: 300px;
  margin: auto;
  color: #2e2e2e;
`

export const LeftActive = styled.div`
  width: 150px;
  height: 54px;
  background: url(${props => props.active === 0 ? leftactive : null}) no-repeat;
  position: absolute;
  left: 12px;
  top: 10px;
  font-size: 19px;
  color: #fff;
  line-height: 50px;
  text-align: center;
`

export const RightActive = styled.div`
  height: 41px;
  width: 135px;
  background: url(${props => props.active === 1 ? rightactive : null}) no-repeat;
  position: absolute;
  right: 10px;
  top: 18px;
  font-size: 19px;
  color: #fff;
  line-height: 38px;
  text-align: center;
`

export const Box = styled.div`
  width: 352px;
  height: 476px;
  background: url(${outline}) no-repeat;
  position: relative;
  padding-top: 70px;
`

export const Card = styled.div`
  height: 96px;
  width: 313px;
  background: url(${card}) no-repeat;
  margin: 5px 0 0 0;
  position: relative;
`

export const Name = styled.div`
  width: 100px;
  height: 25px;
  line-height: 25px;
  position: absolute;
  left: 88px;
  top: 24px;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Similarity = styled.div`
  width: 44px;
  height: 10px;
  position: absolute;
  bottom: 26px;
  left: 88px;
  font-size: 10px;
  font-weight: bold;
`

export const Rate = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  position: absolute;
  bottom: 22.5px;
  left: 130px;
`

export const Details = styled.div`
  height: 30px;
  width: 80px;
  position: absolute;
  right: 28px;
  top: 30px;
  line-height: 30px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
`

export const BottomBtn = styled.div`
  height: 82px;
  width: 241px;
  position: absolute;
  bottom: -24px;
  left: 44px;
  background: url(${bottombtn}) no-repeat;
  line-height: 76px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

export const FilterTop = styled.div`
  position: absolute;
  left: 12px;
  height: 12px;
  width: 314px;
  top: 56px;
  background: linear-gradient(#f8f8f8, rgba(255, 255, 255, 0));
`

export const FilterButtom = styled.div`
  transform: 100;
  position: absolute;
  left: 12px;
  height: 12px;
  width: 314px;
  top: 466px;
  background: linear-gradient(rgba(255, 255, 255, 0), #f8f8f8);
`

export const EmptyBox = styled.img.attrs({
  src: emptybox
})`
  position: relative;
  width: 254px;
  height: 104px;
  margin-bottom: 15px;
`

export const TipText = styled.div`
  color: #FF446B;
  font-weight: 500;
  font-size: ${props => (props.size === "large" ? 22 : 11)}px;
  margin-bottom: 8px;
  letter-spacing: 1px;
`

export const BigRate = styled.div`
  height: 42px;
  width: 89px;
  background: url(${bigrate});
  color: #fff;
  line-height: 40px;
  text-align:center;
  font-size: 24px;
  position: absolute;
  top: 25px;
  right: 24px;
`

export const BigName = styled.div`
  height: 24px;
  width: 100px;
  line-height:24px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
  position: absolute;
  top: 34px;
  left: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const JoinWarpper = styled.div`
  /* position: absolute; */
  /* left: ${props => props.active === 0 ? '704px' : '0'}; */
  /* transition: left .6s ease-out; */
`

export const InitiatedWarpper = styled.div`
  /* position: absolute; */
  /* left: ${props => props.active === 1 ? '-352px' : '0'}; */
  /* transition: left .6s ease-out; */
`
