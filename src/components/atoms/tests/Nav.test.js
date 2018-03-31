import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter, Link } from 'react-router-dom'
import Nav from '../Nav'

it('rendered Nav component', () => {
  const rendered = shallow(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )
  expect(rendered.find(Link)).toBeTruthy()
})
