import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../Icon'

it('rendered Icon component', () => {
  const rendered = shallow(<Icon />).dive()
  expect(rendered.type()).toEqual('a')
})
