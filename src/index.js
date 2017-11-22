import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer as router } from 'react-router-redux'
import styled from 'styled-components'
import registerServiceWorker from './worker'
import Header from './Header'
import About from './About'
import Work from './Work'
import NotFound from './NotFound'
import './index.css'

const history = createBrowserHistory()
const reducer = combineReducers({ router })
const store = createStore(reducer, undefined, compose(applyMiddleware(routerMiddleware(history))))
const AppContainer = styled.div`
  width: 100vw;
  padding: 0 192px;
  background-color: #22222a;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fefeff;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
      </AppContainer>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#root'))
registerServiceWorker()
