import React from 'react'
import { shallow } from 'enzyme'
import About, { Title, Text } from '../About'

describe('<About />', () => {
  test('should render an <div> tag', () => {
    const rendered = shallow(<About />).dive()
    expect(rendered.type()).toEqual('div')
  })

  test('should render the title', () => {
    const rendered = shallow(<About />)
    expect(rendered.find(Title).length).toBe(1)
  })

  test('should render the text', () => {
    const rendered = shallow(<About />)
    expect(rendered.find(Text).length).toBe(4)
  })
})
