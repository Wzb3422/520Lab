import React, {Component} from "react";
import {
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
  Question,
  QuestionLogo,
  QustionContent,
  RightEye,
  Sure,
  SwitchBtn,
  SwitchText,
  Text,
  Ti,
} from "./style";
import "animate.css";
import {connect} from 'react-redux'
import {actionCreator} from './store'

const tag = ["A", "B", "C", "D"]

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      alertShow: false,
      selectTimes:0,
    }
  }

  componentDidMount() {
    this.props.getQuestionsList(this.props.token)
  }

  next() {
    this.setState({num: this.state.num + 1,selectTimes:this.state.selectTimes + 1})
  }

  back() {
    this.setState({num: this.state.num - 1,selectTimes:this.state.selectTimes + 1})
  }

  selectAnswer(value) {
    this.props.selectOption(value)
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

  static showMiddleWare(fn) {
    return fn ? null : "none"
  }

  render() {
    const {num, alertShow} = this.state;
    const Show = newpage.showMiddleWare;
    return (
      <NewWrapper>
        {this.props.questions.map(item => (
          <Container key={item.index}>
            <Box className={(num >= item.index) ?
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
                        <Option
                          key={index}
                          onClick={() => this.selectAnswer(
                            {
                              questionIndex: item.index,
                              optionIndex: index
                            }
                          )
                          }>
                          <Label>{tag[index]}</Label>
                          <Text>{ele}</Text>
                        </Option>
                      )
                    }
                  )
                }
              </OptionContainer>
              <SwitchBtn>
                <SwitchText>换一题</SwitchText>
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
          <Sure>确定</Sure>
          <Cancel onClick={() => this.hideAlert()}>取消</Cancel>
        </Alert>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newpage);
