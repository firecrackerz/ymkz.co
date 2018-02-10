import React from 'react'
import { shallow } from 'enzyme'
import Portfolio, { AppTitle } from '../Portfolio'

describe('<Portfolio />', () => {
  test('should render an <div> tag', () => {
    const rendered = shallow(<Portfolio />)
    expect(rendered.type()).toEqual('div')
  })

  test('should render the app title', () => {
    const rendered = shallow(<Portfolio />)
    expect(rendered.find(AppTitle).length).toBe(1)
  })
})
