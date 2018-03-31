import React from 'react'
import { shallow } from 'enzyme'
import TextInput from '../TextInput'

it('rendered TextInput component', () => {
  const rendered = shallow(<TextInput />).dive()
  expect(rendered.type()).toEqual('input')
})
