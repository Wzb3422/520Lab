import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./sharepage'),
  loading: Loading
})

class SharepageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default SharepageLoadable
