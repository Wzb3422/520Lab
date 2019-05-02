import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageLoadable from './pages/homepage'
import GlobalReset from './style/reset'

function App() {
  return (
    <Fragment>
      <GlobalReset />
      <Router>
        <Route exact path="/" component={HomepageLoadable} />
      </Router>
    </Fragment>
  )
}

export default App
