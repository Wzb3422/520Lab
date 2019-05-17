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
  Ti
} from "./style";
import "animate.css";
import {actionCreator} from "./store";

const tag = ["A", "B", "C", "D"]

class newpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
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

  render() {
    const {num} = this.state;
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
                    <Option onClick={() => this.next()}
                            key={ele}
                    >
                      <Label>{tag[index]}</Label>
                      <Text>{ele}</Text>
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
  return state;
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
