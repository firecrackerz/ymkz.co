import React from 'react'
import { shallow } from 'enzyme'
import Strong from '../Strong'

it('rendered Strong component', () => {
  const rendered = shallow(<Strong />)
  expect(rendered.type()).toEqual('p')
})
