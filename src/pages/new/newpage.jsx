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
  SwitchBtn,
  SwitchText,
  Text,
  Ti
} from "./style";
import "animate.css";
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {Redirect} from 'react-router-dom'
import debounce from 'lodash/debounce'

const tag = ["A", "B", "C", "D"];

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      alertShow: false,
      selectTimes: 0,
      updatedQues: false, // 是否已经出好所有题
    };
    this.updateQuestion = this.updateQuestion.bind(this);
    this.next = debounce(this.next, 260);
    this.showAlert = debounce(this.showAlert, 460);
  }

  componentDidMount() {
    this.props.getQuestionsList(this.props.token)
  }

  next() {
    this.setState({num: this.state.num + 1, selectTimes: this.state.selectTimes + 1})
  }

  back() {
    this.setState({num: this.state.num - 1, selectTimes: this.state.selectTimes + 1})
  }

  selectAnswer(value) {
    this.props.selectOption(value);
    0 <= this.state.num && this.state.num <= 3 ?
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
    return (1 <= num && num <= 4)
  }

  isShowRight() {
    let num = this.state.num;
    return (0 <= num && num <= 3)
  }

  changeYourQuestion(index) {
    let id = parseInt(Math.random() * 41 + 1);
    this.props.getOneQuestion(index, id, this.props.token)
  }

  static showMiddleWare(fn) {
    return fn ? null : "none"
  }

  updateQuestion() {
    this.setState({
      updatedQues: true
    })
  }

  render() {
    const {num, alertShow} = this.state;
    const Show = newpage.showMiddleWare;
    return (
      <NewWrapper>
        {this.props.questions.map(item => (
          <Container key={item.index}>
            <Box className={num >= item.index ?
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
                          <ActiveOptionFirst style={{display: Show(item.yourOption === 0)}}/>
                          <ActiveOptionSecond style={{display: Show(item.yourOption === 1)}}/>
                          <ActiveOptionThird style={{display: Show(item.yourOption === 2)}}/>
                          <ActiveOptionForth style={{display: Show(item.yourOption === 3)}}/>
                          <Option
                            onClick={() => this.selectAnswer({
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
              <SwitchBtn>
                <SwitchText onClick={() => this.changeYourQuestion(item.index)}>换一题</SwitchText>
              </SwitchBtn>
            </Box>
          </Container>
        ))}
        <ArrowContainer style={{display: Show(this.isShowArrow())}}>
          <NoArrowLeft style={{display: Show(!this.isShowLeft())}}/>
          <NoArrowRight style={{display: Show(!this.isShowRight())}}/>
          <ArrowLeft onClick={() => this.back()} style={{display: Show(this.isShowLeft())}}/>
          <ArrowRight onClick={() => this.next()} style={{display: Show(this.isShowRight())}}/>
        </ArrowContainer>
        <BackGround onClick={() => this.hideAlert()} style={{display: Show(alertShow)}}/>
        <Alert style={{display: Show(alertShow)}}>
          <AlertTitle>确认生成研究问卷</AlertTitle>
          <Sure onClick={this.updateQuestion}>确定</Sure>
          <Cancel onClick={() => this.hideAlert()}>取消</Cancel>
        </Alert>
        {this.state.updatedQues ? <Redirect to="/whisper/"/> : null}
        {this.props.token === '' ? <Redirect to="/login/"/> : null}
      </NewWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.new,
    token: state.login.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectOption(value) {
      dispatch(actionCreator.selectOptionAction(value))
    },
    getQuestionsList(token) {
      dispatch(actionCreator.getQuestionAction(token))
    },
    getOneQuestion(index, id, token) {
      dispatch(actionCreator.getOneQuestionAction(index, id, token))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newpage);
