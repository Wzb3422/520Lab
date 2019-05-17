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
  Ti
} from "./style";
import "animate.css";
import Option from './components/option'
import {actionCreator} from "./store";

const tag = ["A", "B", "C", "D"]

class Answerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  next() {
    console.log('next')
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

  componentDidMount () {

  }

  render() {
    let { num } = this.state;
    const Show = Answerpage.showMiddleWare;
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
                {
                  item.options.map((item, index) => {
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
                  })
                }
              </OptionContainer>
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
    ...state
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
)(Answerpage);
