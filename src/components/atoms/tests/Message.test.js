import React from 'react'
import { shallow } from 'enzyme'
import Message from '../Message'

it('rendered Message component', () => {
  const rendered = shallow(<Message />)
  expect(rendered.type()).toEqual('p')
})
