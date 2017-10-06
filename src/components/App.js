import React from 'react'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import styled from 'styled-components'
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers'
import Header from './Header'
import About from './About'
import Work from './Work'

const history = createHistory()
const store = compose(applyMiddleware(routerMiddleware(history)))(createStore)(reducers)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Wrapper>
        <Header />
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </Wrapper>
    </ConnectedRouter>
  </Provider>
)

export default App

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`
