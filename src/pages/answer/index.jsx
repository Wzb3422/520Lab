import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./answerpage'),
  loading: Loading
})

class AnswerpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default AnswerpageLoadable
