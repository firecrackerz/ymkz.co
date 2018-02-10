import React from 'react'
import { shallow } from 'enzyme'
import Cancelectures, { AppTitle } from '../Cancelectures'

describe('<Cancelectures />', () => {
  test('should render an <div> tag', () => {
    const renderedComponent = shallow(<Cancelectures />)
    expect(renderedComponent.type()).toEqual('div')
  })

  test('should render the app title', () => {
    const rendered = shallow(<Cancelectures />)
    expect(rendered.find(AppTitle).length).toBe(1)
  })
})
