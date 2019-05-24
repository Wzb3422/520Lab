import React, {Component} from "react";
import {
  ActiveOptionFirst,
  ActiveOptionForth,
  ActiveOptionSecond,
  ActiveOptionThird,
  Alert,
  AlertTitle,
  Angel,
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  BackGround,
  Box,
  Cancel,
  Container,
  Di,
  Header,
  HeaderText,
  Label,
  LeftEye,
  NewWrapper,
  NoArrowLeft,
  NoArrowRight,
  Num,
  Option,
  OptionContainer,
  OptionsLayOut,
  Question,
  QuestionLogo,
  QustionContent,
  RightEye,
  Sure,
  Text,
  Ti
} from "./style";
import "animate.css";
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {Redirect} from 'react-router-dom'
import debounce from 'lodash/debounce'

const tag = ["A", "B", "C", "D"];

class AnswerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      alertShow: false,
      selectTimes: 0,
      updatedQues: false,
      isOther: false,
    };
    this.next = debounce(this.next, 515);
    this.showAlert = debounce(this.showAlert, 515)
  }

  componentDidMount() {
    this.props.getQuestionsList(this.props.token, this.props.setid);
    this.props.checkEverAnswer(this.props.token, this.props.setid);
    this.InWaiDi()
  }

  InWaiDi() {
    this.props.everMessage === "other" && this.setState({isOther: true})
  }

  next() {
    this.setState({num: this.state.num + 1, selectTimes: this.state.selectTimes + 1})
  }

  back() {
    this.setState({num: this.state.num - 1, selectTimes: this.state.selectTimes + 1})
  }

  async selectAnswer(value) {
    await this.props.selectOption(value);
    1 <= this.state.num && this.state.num <= 4 ?
      this.next() :
      this.showAlert()
  }

  showAlert() {
    this.setState({alertShow: true})
  }

  hideAlert() {
    this.setState({alertShow: false})
  }

  isShowArrow() {
    return this.state.selectTimes >= 4
  }

  isShowLeft() {
    let num = this.state.num;
    return (2 <= num && num <= 5)
  }

  isShowRight() {
    let num = this.state.num;
    return (1 <= num && num <= 4)
  }

  updateQuestion() {
    this.setState({
      updatedQues: true
    });
    console.log(this.state.updatedQues)
  }

  static showMiddleWare(fn) {
    return fn ? null : "none"
  }

  render() {
    const {num, alertShow} = this.state;
    const Show = AnswerPage.showMiddleWare;
    return (
      <NewWrapper>
        {this.props.questions.map(item => (
          <Container key={item.index}>
            <Box className={(num > item.index) ?
              "animated fadeOutLeft fast" :
              "animated fadeInLeft fast"
            }>
              <Header>
                <HeaderText>
                  <Di/>
                  <Num num={item.index}/>
                  <Ti/>
                </HeaderText>
                <Angel/>
                <QuestionLogo/>
                <LeftEye/>
                <RightEye/>
              </Header>
              <Question>
                <QustionContent>{item.question}</QustionContent>
              </Question>
              <OptionContainer>
                {
                  item.options.map((ele, index) => {
                      return (
                        <OptionsLayOut key={index}>
                          <ActiveOptionFirst className={item.yourOption === 0 && "animated zoomInLeft faster"}
                                             style={{display: Show(item.yourOption === 0)}}
                          />
                          <ActiveOptionSecond className={item.yourOption === 1 && "animated zoomInLeft faster"}
                                              style={{display: Show(item.yourOption === 1)}}
                          />
                          <ActiveOptionThird className={item.yourOption === 2 && "animated zoomInLeft faster"}
                                             style={{display: Show(item.yourOption === 2)}}
                          />
                          <ActiveOptionForth className={item.yourOption === 3 && "animated zoomInLeft faster"}
                                             style={{display: Show(item.yourOption === 3)}}
                          />
                          <Option
                            onClick={() => item.index === num && this.selectAnswer({
                              questionIndex: item.index,
                              optionIndex: index
                            })}>
                            <Label>{tag[index]}</Label>
                            <Text>{ele}</Text>
                          </Option>
                        </OptionsLayOut>
                      )
                    }
                  )
                }
              </OptionContainer>
            </Box>
          </Container>
        ))}
        <ArrowContainer className={this.isShowArrow() && "animated fadeIn faster"}
                        style={{display: Show(this.isShowArrow())}}
        >
          <NoArrowLeft style={{display: Show(!this.isShowLeft())}}/>
          <NoArrowRight style={{display: Show(!this.isShowRight())}}/>
          <ArrowLeft onClick={() => this.back()} style={{display: Show(this.isShowLeft())}}/>
          <ArrowRight onClick={() => this.next()} style={{display: Show(this.isShowRight())}}/>
        </ArrowContainer>
        <BackGround className={alertShow && "animated fadeIn faster"}
                    style={{display: Show(alertShow)}}
                    onClick={() => this.hideAlert()}
        />
        <Alert className={alertShow && "animated zoomInDown fast"}
               style={{display: Show(alertShow)}}
        >
          <AlertTitle>确认提交研究问卷</AlertTitle>
          <Sure onClick={() => {
            this.props.postAnswer(this.props.questions, this.props.setid, this.props.token);
            this.updateQuestion()
          }}>确定</Sure>
          <Cancel onClick={() => this.hideAlert()}>取消</Cancel>
        </Alert>
        {this.state.updatedQues ? <Redirect to="/poster/"/> : null}
        {
          (this.props.everMessage === "不能回答自己出的题～" && this.state.isOther === false) ?
          <Redirect to="/home/"/> :
          null
        }
        {this.props.token === '' ? <Redirect to="/login/"/> : null}
      </NewWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.answer,
    token: state.login.token,
    setid: state.login.setid,
    everMessage: state.login.everMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectOption(value) {
      dispatch(actionCreator.AnswerselectOptionAction(value))
    },
    getQuestionsList(token, id) {
      dispatch(actionCreator.AnswerGetQuestionAction(token, id))
    },
    postAnswer(answer, setid, token) {
      dispatch(actionCreator.postAnswerAsyncAction(answer, setid, token))
    },
    checkEverAnswer(token, setid) {
      dispatch(actionCreator.checkEverAnswerAsyncAction(token, setid))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerPage);
