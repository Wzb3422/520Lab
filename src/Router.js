import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomepageLoadable from './pages/homepage'
import ArchiveLoadable from './pages/archivepage'
import DetailLoadable from './pages/detail'
import NewpageLoadable from './pages/new'
import WhisperpageLoadable from './pages/whisper'
import AnswerpageLoadable from './pages/answer'
import LoginpageLoadable from './pages/login'
import SharepageLoadable from './pages/share'
import PosterpageLoadable from './pages/poster'
import Indexpage from './pages/index'
// import RedirectToLogin from './lib/redirectTologin'

function Routers() {
  return (
    <Router>
      <Route exact path="/home/" component={HomepageLoadable} />
      <Route path="/new/" component={NewpageLoadable} />
      <Route path="/archive/" component={ArchiveLoadable} />
      <Route path="/detail/" component={DetailLoadable} />
      <Route path="/whisper/" component={WhisperpageLoadable} />
      <Route path="/answer/" component={AnswerpageLoadable} />
      <Route path="/login/" component={LoginpageLoadable} />
      <Route path="/share/" component={SharepageLoadable} />
      <Route path="/poster/" component={PosterpageLoadable} />
      <Route exact path="/" component={Indexpage} />
    </Router>
  )
}

export default Routers
