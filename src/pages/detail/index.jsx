import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./detailpage'),
  loading: Loading
})

class DetailLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default DetailLoadable
