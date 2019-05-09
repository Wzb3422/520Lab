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

const question = "爱你萌嗷！！！！！"
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
