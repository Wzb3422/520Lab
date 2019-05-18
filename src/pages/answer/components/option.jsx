import React, { Component, Fragment } from 'react';
import './option.css'

class Option extends Component {

  constructor(props) {
    super(props)
    this.state= {
      isActive: false
    }
    this.turnRed = this.turnRed.bind(this)
  }

  turnRed() {
    console.log('I love ccp')
    this.setState({
      isActive: true
    })
  }

  render() {
    return (
      <Fragment>
        <div
          className={ this.state.isActive ?  'active option' : 'option'}
          onClick={() => {
            this.turnRed()
          }}
        >
          <div className={'label'}>{this.props.tag}</div>
          <div className={'text'}>{this.props.text}</div>
        </div>
      </Fragment>
    );
  }
}

export default Option;