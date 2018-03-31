import React from 'react'
import { shallow } from 'enzyme'
import Portfolio from '../Portfolio'

it('rendered Portfolio component', () => {
  const rendered = shallow(<Portfolio />)
  expect(rendered.type()).toEqual('section')
})
