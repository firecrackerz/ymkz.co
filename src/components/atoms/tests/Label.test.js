import React from 'react'
import { shallow } from 'enzyme'
import Label from '../Label'

it('rendered Label component', () => {
  const rendered = shallow(<Label />)
  expect(rendered.type()).toEqual('p')
})
