import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home from '../Home'

it('renders <Home /> without crashing', () => {
  const node = document.createElement('div')
  ReactDOM.render(<Home />, node)
  ReactDOM.unmountComponentAtNode(node)
})
