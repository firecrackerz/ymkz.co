import React from 'react'
import { shallow } from 'enzyme'
import Caption from '../Caption'

it('rendered Caption component', () => {
  const rendered = shallow(<Caption />)
  expect(rendered.type()).toEqual('h5')
})
