import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../Contact'

it('rendered Contact component', () => {
  const rendered = shallow(<Contact />)
    .dive()
    .dive()
    .dive()
  expect(rendered.type()).toEqual('section')
})
