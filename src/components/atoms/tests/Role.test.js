import React from 'react'
import { shallow } from 'enzyme'
import Role from '../Role'

it('rendered Role component', () => {
  const rendered = shallow(<Role />).dive()
  expect(rendered.type()).toEqual('span')
})
