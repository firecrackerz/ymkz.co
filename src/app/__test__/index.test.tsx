import * as Navi from 'navi'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from '..'
import routes from '../../routes'

it('renders <App /> without crashing', () => {
  const node = document.createElement('div')
  const navigation = Navi.createMemoryNavigation({ pages: routes, url: '/' })
  ReactDOM.render(<App navigation={navigation} />, node)
  ReactDOM.unmountComponentAtNode(node)
})
