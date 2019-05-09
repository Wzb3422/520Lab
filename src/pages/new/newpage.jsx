import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Di,
  Header,
  Label,
  NewWapper,
  Num,
  Option,
  OptionContainer,
  Question,
  SwitchBtn,
  SwitchText,
  Text,
  Ti,
  QsText,
  HeaderText,
  LeftEye,
  RightEye
} from './style'

const question = "同学通过扫描二维码回答问题和小家园达到了相应的相爱度即可抽取参与小礼品嗷嗷嗷嗷嗷"     //最多39个字
const tag = ['A', 'B', 'C', 'D']

class newpage extends Component {
  render() {
    return (
      <NewWapper>
        <Box>
          <Header>
            <HeaderText>
              <Di/>
              <Num num={1}/>
              <Ti/>
            </HeaderText>
            <LeftEye/>
            <RightEye/>
          </Header>
          <Question>
            <QsText>{question}</QsText>
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
          <SwitchBtn>
            <SwitchText>换一题</SwitchText>
          </SwitchBtn>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(newpage)
