import React from 'react';

import {
  NewWapper,
  Header,
  Box,
  Di,
  Num,
  Ti,
  Question,
  OptionContainer,
  Option,
  Label,
  Text,
  ArrowLeft
} from './style'


function newpage() {
  return (
    <NewWapper>
      <Box>
        <Header>
          <Di />
          <Num num={1} />
          <Ti />
        </Header>
        <Question>
          那是真的牛批?那是真的牛批?那是真的牛批?那是真的牛批?
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
        {/* <ArrowLeft /> */}
      </Box>
    </NewWapper>
  )
}

export default newpage
