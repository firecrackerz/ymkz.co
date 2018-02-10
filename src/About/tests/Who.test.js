import React from 'react'
import { shallow } from 'enzyme'
import Who, { Name, Aka } from '../Who'

describe('<Who />', () => {
  test('should render an <div> tag', () => {
    const renderedComponent = shallow(<Who />).dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  test('should render the name', () => {
    const rendered = shallow(<Who />)
    expect(rendered.find(Name).length).toBe(2)
  })

  test('should render the aka', () => {
    const rendered = shallow(<Who />)
    expect(rendered.find(Aka).length).toBe(1)
  })
})
