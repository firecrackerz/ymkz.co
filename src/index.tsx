import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Header from 'src/components/Header'
import 'src/helpers/globalstyle'
import 'src/helpers/serviceworker'
import * as Routes from 'src/routes'

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Routes.Home />} />
          <Route exact path="/about" render={() => <Routes.About />} />
          <Route exact path="/work" render={() => <Routes.Work />} />
          <Redirect to="/" />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

render(<App />, document.querySelector('#app'))
