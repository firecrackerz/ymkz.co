import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Work from '../Work'

it('renders <Work /> without crashing', () => {
  const node = document.createElement('div')
  ReactDOM.render(<Work />, node)
  ReactDOM.unmountComponentAtNode(node)
})
