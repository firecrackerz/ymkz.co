import React from 'react'
import { shallow } from 'enzyme'
import Link from '../Link'

it('rendered Link component', () => {
  const rendered = shallow(<Link />).dive()
  expect(rendered.type()).toEqual('li')
})
