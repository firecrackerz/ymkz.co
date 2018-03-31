import React from 'react'
import { shallow } from 'enzyme'
import Skills from '../Skills'

it('rendered Skills component', () => {
  const rendered = shallow(<Skills />).dive()
  expect(rendered.type()).toEqual('section')
})
