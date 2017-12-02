import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer as router } from 'react-router-redux'
import styled, { injectGlobal } from 'styled-components'
import RobotoBlack from './Roboto-Black.ttf'
import RobotoLight from './Roboto-Light.ttf'
import RobotoMedium from './Roboto-Medium.ttf'
import Header from './Header'
import About from './About'
import Work from './Work'
import NotFound from './NotFound'
import registerServiceWorker from './worker'

const history = createBrowserHistory()
const reducer = combineReducers({ router })
const store = createStore(reducer, undefined, compose(applyMiddleware(routerMiddleware(history))))
const AppContainer = styled.div`
  background-color: #22222a;
  color: #fefeff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding: 0 192px;
  width: 100vw;
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

injectGlobal`
  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    src: url(${RobotoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${RobotoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    src: url(${RobotoBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: 300;
    src: local('Yu Gothic');
  }
  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: 500;
    src: local('Yu Gothic');
  }
  @font-face {
    font-family: 'Custom Yu Gothic';
    font-weight: bold;
    src: local('Yu Gothic');
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, div, span, a, p, img, ul, li, label, h1, h2, h3, h4, h5, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium', YuGothic, 'Custom Yu Gothic', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
    font-feature-settings: 'liga';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: #22222a;
    color: #fefeff;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
`

ReactDOM.render(<App />, document.querySelector('#root'))
registerServiceWorker()
