import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./archivepage'),
  loading: Loading
})

class ArchiveLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default ArchiveLoadable
