import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./whisperpage'),
  loading: Loading
})

class WhisperpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default WhisperpageLoadable
