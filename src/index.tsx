import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'src/components/organisms/Header'
import Container from 'src/components/templates/Container'
import 'src/index.css'
import * as routes from 'src/routes'

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={routes.About} />
        <Route path="/about" component={routes.About} />
        <Route path="/work" component={routes.Work} />
        <Route path="/act" component={routes.Act} />
        <Route render={routes.NotFoundRedirectToRoot} />
      </Switch>
    </Container>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#root'))
