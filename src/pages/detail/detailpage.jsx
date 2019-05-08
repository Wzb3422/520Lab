import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  DetailWarpper,
  Content,
  Box,
  Header,
  CardContainer,
  Card,
  Num,
  Question,
  YourAnswerBox,
  YourAnswerLeft,
  YourAnswerRight,
  YourChoice,
  YourAnswer,
  HisAnswer,
  HisAnswerText,
  HisAnswerRight,
  HisAnswerContent,
  HisAnswerOption
} from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWarpper>
        <Content>
          <Box>
            <Header />
            <CardContainer>
              {
                this.props.questionList.map((item, index) => {
                  return (
                    <Card key={index}>
                      <Num num={index}></Num>
                      <Question>{item.question}</Question>
                      <YourAnswerBox>
                        <YourAnswerLeft>
                          你的答案
                        </YourAnswerLeft>
                        <YourAnswerRight>
                          <YourChoice>A</YourChoice>
                          <YourAnswer>手机还在床下</YourAnswer>
                        </YourAnswerRight>
                      </YourAnswerBox>
                      <HisAnswer>
                        <HisAnswerText>TA的答案</HisAnswerText>
                        <HisAnswerRight>
                          <HisAnswerOption>A</HisAnswerOption>
                          <HisAnswerContent>你的外卖到了</HisAnswerContent>
                        </HisAnswerRight>
                      </HisAnswer>
                    </Card>
                  )
                })
              }
            </CardContainer>
          </Box>
        </Content>
      </DetailWarpper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionList: state.detail.questionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
