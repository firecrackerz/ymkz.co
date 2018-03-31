import React from 'react'
import { shallow } from 'enzyme'
import Code from '../Code'

it('rendered Code component', () => {
  const rendered = shallow(<Code />)
  expect(rendered.type()).toEqual('code')
})
