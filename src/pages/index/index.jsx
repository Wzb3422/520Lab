import React, { Component } from 'react'
import {
  WhisperWarpper,
  Btn,
  Prompt
} from './style'
import {
  Link
} from 'react-router-dom'

class Indexpage extends Component {
  render() {
    return (
      <WhisperWarpper>
        <Prompt />
        <Link to="/login/">
          <Btn />
        </Link>
      </WhisperWarpper>
    )
  }
}

export default Indexpage
