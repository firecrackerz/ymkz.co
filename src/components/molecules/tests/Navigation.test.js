import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../Navigation'

it('rendered Navigation component', () => {
  const rendered = shallow(<Navigation />).dive()
  expect(rendered.type()).toEqual('nav')
})
