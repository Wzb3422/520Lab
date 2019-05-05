import React, { Fragment } from 'react';
import Routers from './Router'
import GlobalReset from './style/reset'
import { Provider } from 'react-redux'
import store from './store'
import { Grid,Imge} from './style/background'

function App() {
  return (
    <Fragment>
      <Grid/>
      <Imge/>
      <Provider store={store}>
        <GlobalReset />
        <Routers />
      </Provider>
    </Fragment>
  )
}

export default App
