import 'src/index.css'
import 'src/serviceworker'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Routes from 'src/routes'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Layout from 'src/components/templates/Layout'
import Header from 'src/components/organisms/Header'

const App: React.SFC = () => (
  <Layout>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Routes.About} />
          <Route exact path="/about" component={Routes.About} />
          <Route exact path="/work" component={Routes.Work} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Layout>
)

ReactDOM.render(<App />, document.querySelector('#app'))
