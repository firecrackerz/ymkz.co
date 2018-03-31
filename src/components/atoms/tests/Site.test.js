import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter, Link } from 'react-router-dom'
import Site from '../Site'

it('rendered Site component', () => {
  const rendered = shallow(
    <MemoryRouter>
      <Site />
    </MemoryRouter>
  )
  expect(rendered.find(Link)).toBeTruthy()
})
