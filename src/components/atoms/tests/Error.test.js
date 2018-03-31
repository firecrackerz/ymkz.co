import React from 'react'
import { shallow } from 'enzyme'
import Error from '../Error'

it('rendered Error component', () => {
  const rendered = shallow(<Error />)
  expect(rendered.type()).toEqual('div')
})
