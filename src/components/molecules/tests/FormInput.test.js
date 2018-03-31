import React from 'react'
import { shallow } from 'enzyme'
import FormInput from '../FormInput'

it('rendered FormInput component', () => {
  const rendered = shallow(<FormInput />).dive()
  expect(rendered.type()).toEqual('label')
})
