import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./posterpage'),
  loading: Loading
})

class PosterpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default PosterpageLoadable
