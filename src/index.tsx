import * as React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'src/components/Header'
import 'src/localization'
import * as Routes from 'src/routes'

const app = document.querySelector('#app') as HTMLElement

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Header />
        <Switch>
          <Route exact path="/" component={Routes.Home} />
          <Route exact path="/about" component={Routes.About} />
          <Route exact path="/work" component={Routes.Work} />
          <Route component={Routes.NotFound} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

if (app.hasChildNodes()) {
  hydrate(<App />, app)
} else {
  render(<App />, app)
}
