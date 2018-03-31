import React from 'react'
import { shallow } from 'enzyme'
import About from '../About'
import Who from '../../molecules/Who'
import Humanity from '../../molecules/Humanity'
import Skills from '../../molecules/Skills'
import Social from '../../molecules/Social'
import Contact from '../../organisms/Contact'

it('rendered About component', () => {
  const rendered = shallow(<About />)
  expect(rendered.find(Who)).toBeTruthy()
  expect(rendered.find(Humanity)).toBeTruthy()
  expect(rendered.find(Skills)).toBeTruthy()
  expect(rendered.find(Social)).toBeTruthy()
  expect(rendered.find(Contact)).toBeTruthy()
})
