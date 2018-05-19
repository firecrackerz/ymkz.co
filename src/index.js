// @flow
import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '~/components/organisms/Header.js'
import About from '~/components/pages/About.js'
import Work from '~/components/pages/Work.js'
import NotFound from '~/components/pages/NotFound.js'
import '~/inject-global'
import '~/service-worker'

const container = document.querySelector('#root')

if (container) {
  render(
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>,
    container
  )
} else {
  throw new Error('Error occurred when mounting to the DOM')
}
