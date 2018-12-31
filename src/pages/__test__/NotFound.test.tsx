import * as React from 'react'
import * as ReactDOM from 'react-dom'
import NotFound from '../NotFound'

it('renders <NotFound /> without crashing', () => {
  const node = document.createElement('div')
  ReactDOM.render(<NotFound />, node)
  ReactDOM.unmountComponentAtNode(node)
})
