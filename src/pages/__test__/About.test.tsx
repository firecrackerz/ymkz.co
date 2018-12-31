import * as React from 'react'
import * as ReactDOM from 'react-dom'
import About from '../About'

it('renders <About /> without crashing', () => {
  const node = document.createElement('div')
  ReactDOM.render(<About />, node)
  ReactDOM.unmountComponentAtNode(node)
})
