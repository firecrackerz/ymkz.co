import * as Navi from 'navi'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactNavi from 'react-navi'
import Header from './components/modules/Header'
import routes from './routes'

function App({ navigation }: { navigation: Navi.BrowserNavigation<{}> }) {
  return (
    <ReactNavi.NavProvider navigation={navigation}>
      <Header />
      <ReactNavi.NavRoute />
    </ReactNavi.NavProvider>
  )
}

Navi.app({
  exports: App,
  pages: routes,
  main: async () => {
    const navigation = Navi.createBrowserNavigation({ pages: routes })
    await navigation.steady()
    const __PRODUCTION__ = process.env.NODE_ENV === 'production'
    const renderer = __PRODUCTION__ ? ReactDOM.hydrate : ReactDOM.render
    renderer(<App navigation={navigation} />, document.querySelector('#root'))
  }
})
