import React from 'react';
import {
  DetailWarpper,
  Content,
  Box,
  Header,
  CardContainer,
  Card,
  Num,
  Question
} from './style'

function Detail() {
  return (
    <DetailWarpper>
      <Content>
        <Box>
          <Header />
          <CardContainer>
            <Card>
              <Num>1</Num>
              <Question>我觉得我可能这样脱单?</Question>
            </Card>
            <Card>
              <Num>1</Num>
              <Question>我觉得我可能这样脱单?</Question>
            </Card>
            <Card>
              <Num>1</Num>
              <Question>我觉得我可能这样脱单?</Question>
            </Card>
            <Card>
              <Num>1</Num>
              <Question>我觉得我可能这样脱单?</Question>
            </Card>
            <Card>
              <Num>1</Num>
              <Question>我觉得我可能这样脱单?</Question>
            </Card>
          </CardContainer>
        </Box>
      </Content>
    </DetailWarpper>
  );
}

export default Detail
