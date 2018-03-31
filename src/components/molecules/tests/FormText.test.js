import React from 'react'
import { shallow } from 'enzyme'
import FormText from '../FormText'

it('rendered FormText component', () => {
  const rendered = shallow(<FormText />).dive()
  expect(rendered.type()).toEqual('label')
})
