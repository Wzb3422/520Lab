import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Box,
  Card,
  CardContainer,
  Content,
  DetailWarpper,
  Header,
  HisAnswer,
  HisAnswerContent,
  HisAnswerOption,
  HisAnswerRight,
  HisAnswerText,
  Num,
  Question,
  Sticker,
  YourAnswer,
  YourAnswerBox,
  YourAnswerLeft,
  YourAnswerRight,
  YourChoice
} from './style'
import {
  actionCreator
} from './store'

class Detail extends Component {

  componentDidMount() {
    this.props.getQuestionText(this.props.token, this.props.detailobj)
  }

  render() {
    return (
      <DetailWarpper>
        <Content>
          <Box>
            <Header/>
            <CardContainer>
              {
                this.props.questionList.map((item, index) => {
                  return (
                    <Card key={index}>
                      <Num num={index}/>
                      <Question>{item.question}</Question>
                      <YourAnswerBox>
                        <YourAnswerLeft>
                          你的答案
                        </YourAnswerLeft>
                        <YourAnswerRight>
                          <Sticker>
                            <YourChoice>{item.yours.choice}</YourChoice>
                          </Sticker>
                          <YourAnswer>{item.yours.content}</YourAnswer>
                        </YourAnswerRight>
                      </YourAnswerBox>
                      <HisAnswer>
                        <HisAnswerText>TA的答案</HisAnswerText>
                        <HisAnswerRight>
                          <HisAnswerOption>{item.his.choice}</HisAnswerOption>
                          <HisAnswerContent>{item.his.content}</HisAnswerContent>
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
    questionList: state.detail.questionList,
    token: state.login.token,
    detailobj: state.archive.detailobj
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionText(token, obj) {
      dispatch(actionCreator.getQuestonTextAsyncAction(token, obj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
