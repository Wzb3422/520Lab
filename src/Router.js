import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageLoadable from './pages/homepage'
import ArchiveLoadable from './pages/archivepage'
import DetailLoadable from './pages/detail'

function Routers() {
  return (
    <Router>
      <Route exact path="/" component={HomepageLoadable} />
      <Route path="/new/" component={HomepageLoadable} />
      <Route path="/archive/" component={ArchiveLoadable} />
      <Route path="/detail/" component={DetailLoadable} />
    </Router>
  )
}

export default Routers
