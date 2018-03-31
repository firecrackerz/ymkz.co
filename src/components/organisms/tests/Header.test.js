import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'
import Heading from '../../molecules/Heading'
import Navigation from '../../molecules/Navigation'

it('rendered Header component', () => {
  const rendered = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  expect(rendered.find(Heading).length).toBe(1)
  expect(rendered.find(Navigation).length).toBe(1)
})
