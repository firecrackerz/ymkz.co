import React from 'react'
import { shallow } from 'enzyme'
import Narosirase, { AppTitle } from '../Narosirase'

describe('<Narosirase />', () => {
  test('should render an <div> tag', () => {
    const rendered = shallow(<Narosirase />)
    expect(rendered.type()).toEqual('div')
  })

  test('should render the app title', () => {
    const rendered = shallow(<Narosirase />)
    expect(rendered.find(AppTitle).length).toBe(1)
  })
})
