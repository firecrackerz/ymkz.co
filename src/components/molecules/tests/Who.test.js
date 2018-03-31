import React from 'react'
import { shallow } from 'enzyme'
import Who from '../Who'

it('rendered Who component', () => {
  const rendered = shallow(<Who />).dive()
  expect(rendered.type()).toEqual('section')
})
