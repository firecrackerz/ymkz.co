import React from 'react'
import { shallow } from 'enzyme'
import Description from '../Description'

it('rendered Description component', () => {
  const rendered = shallow(<Description />)
  expect(rendered.type()).toEqual('div')
})
