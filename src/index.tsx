import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Header from 'src/components/organisms/Header'
import { About, Act, Work } from 'src/components/pages'
import Container from 'src/components/templates/Container'
import 'src/index.css'

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/act" component={Act} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Container>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#root'))
