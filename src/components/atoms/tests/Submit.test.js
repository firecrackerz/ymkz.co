import React from 'react'
import { shallow } from 'enzyme'
import Submit from '../Submit'

it('rendered Submit component', () => {
  const rendered = shallow(<Submit />).dive()
  expect(rendered.type()).toEqual('button')
})
