import React from 'react';
import {
  DetailWarpper,
  Content,
  Box,
  Header,
  CardContainer,
  Card,
  Num
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
            </Card>
            <Card>
              <Num>2</Num>
            </Card>
            <Card>
              <Num>3</Num>
            </Card>
            <Card>
              <Num>4</Num>
            </Card>
            <Card>
              <Num>5</Num>
            </Card>
          </CardContainer>
        </Box>
      </Content>
    </DetailWarpper>
  );
}

export default Detail
