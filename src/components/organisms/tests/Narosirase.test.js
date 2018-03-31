import React from 'react'
import { shallow } from 'enzyme'
import Narosirase from '../Narosirase'

it('rendered Narosirase component', () => {
  const rendered = shallow(<Narosirase />)
  expect(rendered.type()).toEqual('section')
})
