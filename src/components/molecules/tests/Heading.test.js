import React from 'react'
import { shallow } from 'enzyme'
import Heading from '../Heading'

it('rendered Heading component', () => {
  const rendered = shallow(<Heading />).dive()
  expect(rendered.type()).toEqual('h1')
})
