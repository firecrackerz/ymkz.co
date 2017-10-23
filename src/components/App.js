import React from 'react'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers'
import Header from './Header'
import About from './About'
import Work from './Work'
import NotFound from './NotFound'

const history = createHistory()
const store = compose(applyMiddleware(routerMiddleware(history)))(createStore)(reducers)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
