import React from 'react';

import {
  ArrowLeft,
  ArrowRight,
  BigText,
  Box,
  Di,
  Header,
  Label,
  NewWapper,
  Num,
  Option,
  OptionContainer,
  Question,
  Text,
  Ti
} from './style'


function newpage() {
  const question = "那是真的牛批?那是真的牛批?那是真的牛批?那是真的牛批?"
  return (
    <NewWapper>
      <Box>
        <Header>
          <Di/>
          <Num num={1}/>
          <Ti/>
        </Header>
        <Question>
          <BigText>
            {question.substring(0,2)}
          </BigText>
          {question.substring(2)}
        </Question>
        <OptionContainer>
          <Option>
            <Label>A</Label>
            <Text>你是不是龙鸣</Text>
          </Option>
          <Option>
            <Label>B</Label>
            <Text>你可别被我逮住了</Text>
          </Option>
          <Option>
            <Label>C</Label>
            <Text>旬日 我虽死</Text>
          </Option>
          <Option>
            <Label>D</Label>
            <Text>你吃饭了吗</Text>
          </Option>
        </OptionContainer>
        <ArrowLeft/>
        <ArrowRight/>
      </Box>
    </NewWapper>
  )
}

export default newpage
