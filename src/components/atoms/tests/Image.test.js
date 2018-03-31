import React from 'react'
import { shallow } from 'enzyme'
import Image from '../Image'

it('rendered Image component', () => {
  const rendered = shallow(<Image />).dive()
  expect(rendered.type()).toEqual('img')
})
