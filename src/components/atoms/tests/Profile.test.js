import React from 'react'
import { shallow } from 'enzyme'
import Profile from '../Profile'

it('rendered Profile component', () => {
  const rendered = shallow(<Profile />).dive()
  expect(rendered.type()).toEqual('div')
})
