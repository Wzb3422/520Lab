import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./newpage'),
  loading: Loading
})

class NewpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default NewpageLoadable
