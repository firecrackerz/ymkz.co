import React from 'react'
import { shallow } from 'enzyme'
import Humanity from '../Humanity'

it('rendered Humanity component', () => {
  const rendered = shallow(<Humanity />).dive()
  expect(rendered.type()).toEqual('section')
})
