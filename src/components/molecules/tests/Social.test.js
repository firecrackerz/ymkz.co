import React from 'react'
import { shallow } from 'enzyme'
import Social from '../Social'

it('rendered Social component', () => {
  const rendered = shallow(<Social />).dive()
  expect(rendered.type()).toEqual('section')
})
