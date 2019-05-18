import React, { Component, Fragment } from 'react';
import './option.css'
import { connect } from 'react-redux'
import { actionCreator } from '../store'

class Option extends Component {


  // turnRed() {
  //   console.log('I love ccp')
  //   this.setState({
  //     isActive: true
  //   })
  // }

  render() {
    return (
      <Fragment>
        <div
          className={'option'}
          onClick={() => {
            // this.turnRed()
            this.props.setAnswer(this.props.tag)
            this.props.changeNum(1)
          }}
        >
          <div className={'label'}>{this.props.tag}</div>
          <div className={'text'}>{this.props.text}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeNum(payload) {
      dispatch(actionCreator.changeNumAction(payload))
    },
    setAnswer(payload) {
      dispatch(actionCreator.setAnswerAction(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);