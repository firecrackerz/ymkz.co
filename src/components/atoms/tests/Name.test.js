import React from 'react'
import { shallow } from 'enzyme'
import Name from '../Name'

it('rendered Name component', () => {
  const rendered = shallow(<Name />)
  expect(rendered.type()).toEqual('p')
})
