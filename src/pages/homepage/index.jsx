import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./homepage'),
  loading: Loading
})

class HomepageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default HomepageLoadable
