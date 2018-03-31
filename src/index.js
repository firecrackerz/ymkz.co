import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { asyncComponentLoad } from './components'
import Header from './components/organisms/Header'
import serviceWorker from './serviceWorker'
import './injectStyle'

const About = asyncComponentLoad(() => import('./components/pages/About'))
const Work = asyncComponentLoad(() => import('./components/pages/Work'))
const NotFound = asyncComponentLoad(() => import('./components/pages/NotFound'))

render(
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker()
