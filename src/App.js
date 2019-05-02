import React, { Fragment } from 'react';
import Routers from './Router'
import GlobalReset from './style/reset'

function App() {
  return (
    <Fragment>
      <GlobalReset />
      <Routers />
    </Fragment>
  )
}

export default App
