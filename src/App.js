import React, { Fragment } from 'react';
import Routers from './Router'
import GlobalReset from './style/reset'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalReset />
        <Routers />
      </Provider>
    </Fragment>
  )
}

export default App
