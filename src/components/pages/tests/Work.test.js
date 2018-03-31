import React from 'react'
import { shallow } from 'enzyme'
import Work from '../Work'
import Portfolio from '../../organisms/Portfolio'
import Narosirase from '../../organisms/Narosirase'
import Cancelectures from '../../organisms/Cancelectures'

it('rendered Work component', () => {
  const rendered = shallow(<Work />)
  expect(rendered.find(Portfolio)).toBeTruthy()
  expect(rendered.find(Narosirase)).toBeTruthy()
  expect(rendered.find(Cancelectures)).toBeTruthy()
})
