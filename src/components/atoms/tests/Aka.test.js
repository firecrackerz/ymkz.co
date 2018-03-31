import React from 'react'
import { shallow } from 'enzyme'
import Aka from '../Aka'

it('rendered Aka component', () => {
  const rendered = shallow(<Aka />)
  expect(rendered.type()).toEqual('p')
})
