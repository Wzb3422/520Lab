import React, { Component } from 'react';
import {
  connect
} from 'react-redux'
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

const question = "那是真的牛批?那是真的牛批?那是真的牛批?那是真的牛批?"
const tag = ['A', 'B', 'C', 'D']
class newpage extends Component {
  render() {
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
            {
              this.props.options.map((item, index) => {
                return (
                  <Option key={item}>
                    <Label>
                      {tag[index]}
                    </Label>
                    <Text>{item}</Text>
                  </Option>
                )
              })
            }
          </OptionContainer>
          <ArrowLeft/>
          <ArrowRight/>
        </Box>
      </NewWapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.new.options
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newpage)
