import React from 'react'
import { shallow } from 'enzyme'
import NotFOund, { Container } from '..'

describe('<NotFOund />', () => {
  test('should render an <div> tag', () => {
    const rendered = shallow(<NotFOund />).dive()
    expect(rendered.type()).toEqual('div')
  })

  test('should render the name', () => {
    const rendered = shallow(<NotFOund />)
    expect(rendered.find(Container).length).toBe(1)
  })
})
