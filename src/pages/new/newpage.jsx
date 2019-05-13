import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Angel,
  ArrowLeft,
  ArrowRight,
  Box,
  Di,
  Header,
  HeaderText,
  Label,
  LeftEye,
  NewWapper,
  Num,
  Option,
  OptionAnimationWarpper,
  OptionContainer,
  QsText,
  Question,
  QuestionText,
  RightEye,
  SwitchBtn,
  SwitchText,
  Text,
  Ti
} from './style'
import 'animate.css'
import {actionCreator} from './store'

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
              <Num num={this.props.num}/>
              <Ti/>
            </HeaderText>
            <Angel/>
            <QuestionText/>
            <LeftEye/>
            <RightEye/>
          </Header>
          <Question>
            <QsText>{question}</QsText>
          </Question>
          <OptionContainer>
            <OptionAnimationWarpper
              className={this.props.isIn ? 'animated fadeOutLeft fast' : 'animated fadeInRight fast'}>
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
            </OptionAnimationWarpper>
          </OptionContainer>
          <ArrowLeft/>
          <ArrowRight onClick={!this.props.isIn ? this.props.changeAnswerSheet : null}/>
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
    options: state.new.options,
    isIn: state.new.isIn,
    num: state.new.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAnswerSheet(e) {
      let num = 1
      if (num < 5 && num >= 1) {
        num++
        dispatch(actionCreator.changeSheetAsyncAction())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newpage)
