import React from 'react'
import { shallow } from 'enzyme'
import Title from '../Title'

it('rendered Title component', () => {
  const rendered = shallow(<Title />)
  expect(rendered.type()).toEqual('h2')
})
