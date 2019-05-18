import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Alert,
  Angel,
  AlertTitle,
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  BackGround,
  Box,
  Container,
  Di,
  Header,
  HeaderText,
  Label,
  LeftEye,
  NewWapper,
  NoArrowLeft,
  NoArrowRight,
  Num,
  Option,
  OptionContainer,
  Question,
  QuestionLogo,
  QustionContent,
  RightEye,
  SwitchBtn,
  SwitchText,
  Text,
  Ti,
  Sure,
  Cancel
} from "./style";
import "animate.css";
import {actionCreator} from "./store";
import axios from 'axios'

const tag = ["A", "B", "C", "D"]

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      alertShow: false
    }
  }

  next() {
    this.setState({num: this.state.num + 1})
  }

  back() {
    this.setState({num: this.state.num - 1})
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

  selectAnswer(questionIndex, optionIndex) {
    return (
      0 <= this.state.num && this.state.num <= 3 ?
        this.submit(questionIndex, optionIndex) & this.next() :
        this.showAlert()
    )
  }

  submit(questionIndex, optionIndex) {
    //TODO: action
  }

  showAlert() {
    this.setState({alertShow: true})
  }

  hidAlert() {
    this.setState({alertShow: false})
  }

  componentDidMount () {
    axios.get('/api/list.json')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    const {num, alertShow} = this.state;
    const Show = newpage.showMiddleWare;
    return (
      <NewWapper>
        {this.props.new.map(item => (
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
                {item.options.map((ele, index) => {
                  return (
                    <Option
                      key={item}
                      tag={tag[index]}
                      text={item}
                      next={this.next}
                      onClick={this.next}
                    />
                  );
                })}
              </OptionContainer>
              <SwitchBtn>
                <SwitchText>换一题</SwitchText>
              </SwitchBtn>
            </Box>
          </Container>
        ))}
        <ArrowContainer>
          <NoArrowLeft style={{display: Show(!this.isShowLeft())}}/>
          <NoArrowRight style={{display: Show(!this.isShowRight())}}/>
          <ArrowLeft onClick={() => this.back()} style={{display: Show(this.isShowLeft())}}/>
          <ArrowRight onClick={() => this.next()} style={{display: Show(this.isShowRight())}}/>
        </ArrowContainer>
        <BackGround onClick={() => this.hidAlert()} style={{display: Show(alertShow)}}/>
        <Alert style={{display: Show(alertShow)}}>
          <AlertTitle>确认生成研究问卷</AlertTitle>
          <Sure>确定</Sure>
          <Cancel onClick={() => this.hidAlert()}>取消</Cancel>
        </Alert>
      </NewWapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state.new.num,
    questions: state.new.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeQusetion(e) {
      dispatch(actionCreator.changeSheetAsyncAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newpage);
