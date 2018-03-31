import React from 'react'
import { shallow } from 'enzyme'
import Cancelectures from '../Cancelectures'

it('rendered Cancelectures component', () => {
  const rendered = shallow(<Cancelectures />)
  expect(rendered.type()).toEqual('section')
})
