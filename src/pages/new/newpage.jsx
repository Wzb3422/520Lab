import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Angel,
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  Box,
  Container,
  Di,
  Header,
  HeaderText,
  LeftEye,
  NewWapper,
  NoArrowLeft,
  NoArrowRight,
  Num,
  OptionContainer,
  Question,
  QuestionLogo,
  QustionContent,
  RightEye,
  SwitchBtn,
  SwitchText,
  Ti
} from "./style";
import Option from './components/option'
import "animate.css";
import {actionCreator} from "./store";
import axios from 'axios'

const tag = ["A", "B", "C", "D"]

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  next() {
    this.props.changeNum(1)
  }

  back() {
    this.props.changeNum(-1)
  }


  isShowLeft() {
    let num = this.props.num;
    return (1 <= num && num <= 4)
  }

  isShowRight() {
    let num = this.props.num;
    return (0 <= num && num <= 3)
  }

  static showMiddleWare(fn) {
    return fn ? null : "none"
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
    const { num } = this.props;
    const Show = newpage.showMiddleWare;
    return (
      <NewWapper>
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
                {item.options.map((item, index) => {
                  return (
                    <Option
                      key={item}
                      tag={tag[index]}
                      text={item}
                      next={this.next}
                      onClick={this.next}
                    >
                    </Option>
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
    changeNum(payload) {
      dispatch(actionCreator.changeNumAction(payload))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newpage);
