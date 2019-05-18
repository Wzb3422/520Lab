import React, { Component } from 'react';
import Loadable from 'react-loadable'
import Loading from '../common/Loading/index'

const LoadableComponent = Loadable({
  loader: () => import('./loginpage'),
  loading: Loading
})

class LoginpageLoadable extends Component {
  render() {
    return <LoadableComponent />
  }
}

export default LoginpageLoadable
