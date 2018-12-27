import * as Navi from 'navi'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'
import routes from './routes'
import * as ServiceWorker from './service-worker'

Navi.app({
  exports: App,
  pages: routes,
  main: async () => {
    const navigation = Navi.createBrowserNavigation({ pages: routes })
    await navigation.steady()
    const __PRODUCTION__ = process.env.NODE_ENV === 'production'
    const renderer = __PRODUCTION__ ? ReactDOM.hydrate : ReactDOM.render
    renderer(<App navigation={navigation} />, document.querySelector('#root'))
    ServiceWorker.register()
  }
})
