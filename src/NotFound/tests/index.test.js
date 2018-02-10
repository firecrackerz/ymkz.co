import React from 'react'
import { shallow } from 'enzyme'
import NotFOund, { Container } from '..'

describe('<NotFOund />', () => {
  test('should render an <div> tag', () => {
    const renderedComponent = shallow(<NotFOund />).dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  test('should render the name', () => {
    const rendered = shallow(<NotFOund />)
    expect(rendered.find(Container).length).toBe(1)
  })
})
