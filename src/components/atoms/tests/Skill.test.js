import React from 'react'
import { shallow } from 'enzyme'
import Skill from '../Skill'

it('rendered Skill component', () => {
  const rendered = shallow(<Skill />)
  expect(rendered.type()).toEqual('span')
})
