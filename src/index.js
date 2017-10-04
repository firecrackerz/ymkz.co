import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import './index.css'

const history = createHistory()
const store = compose(applyMiddleware(routerMiddleware(history)))(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
