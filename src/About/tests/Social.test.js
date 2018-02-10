import React from 'react'
import { shallow } from 'enzyme'
import Social, { Title, Icon, Link } from '../Social'

describe('<Social />', () => {
  test('should render an <div> tag', () => {
    const renderedComponent = shallow(<Social />).dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  test('should render the title', () => {
    const rendered = shallow(<Social />)
    expect(rendered.find(Title).length).toBe(1)
  })

  test('should render the icon', () => {
    const rendered = shallow(<Social />)
    expect(rendered.find(Icon).length).toBe(3)
  })

  test('should render Skill with padding-left 0 on first', () => {
    const rendered = shallow(<Link first />)
    expect(rendered).toHaveStyleRule('padding-left', '0')
  })

  test('should render Skill with padding-right 0 on last', () => {
    const rendered = shallow(<Link last />)
    expect(rendered).toHaveStyleRule('padding-right', '0')
  })
})
