import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '../TextArea'

it('rendered TextArea component', () => {
  const rendered = shallow(<TextArea />).dive()
  expect(rendered.type()).toEqual('textarea')
})
