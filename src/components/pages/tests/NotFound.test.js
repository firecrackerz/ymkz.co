import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'

it('rendered NotFound component', () => {
  const rendered = shallow(<NotFound />).dive()
  expect(rendered.type()).toEqual('div')
})
