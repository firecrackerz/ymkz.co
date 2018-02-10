import React from 'react'
import { shallow } from 'enzyme'
import Work from '..'
import Portfolio from '../Portfolio'
import Narosirase from '../Narosirase'
import Cancelectures from '../Cancelectures'

describe('<Portfolio />', () => {
  test('should render an <div> tag', () => {
    const renderedComponent = shallow(<Work />).dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  test('should render the <Portfolio />', () => {
    const rendered = shallow(<Work />)
    expect(rendered.find(Portfolio).length).toBe(1)
  })

  test('should render the <Narosirase /', () => {
    const rendered = shallow(<Work />)
    expect(rendered.find(Narosirase).length).toBe(1)
  })

  test('should render the <Cancelectures /', () => {
    const rendered = shallow(<Work />)
    expect(rendered.find(Cancelectures).length).toBe(1)
  })
})
