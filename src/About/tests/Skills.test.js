import React from 'react'
import { shallow } from 'enzyme'
import Skills, { Title, SkillSet, Skill } from '../Skills'

describe('<Skills />', () => {
  test('should render an <div> tag', () => {
    const rendered = shallow(<Skills />).dive()
    expect(rendered.type()).toEqual('div')
  })

  test('should render the title', () => {
    const rendered = shallow(<Skills />)
    expect(rendered.find(Title).length).toBe(1)
  })

  test('should render the skillset', () => {
    const rendered = shallow(<Skills />)
    expect(rendered.find(SkillSet).length).toBe(1)
  })

  test('should render the skill', () => {
    const rendered = shallow(<Skills />)
    expect(rendered.find(Skill).length).toBe(9)
  })

  test('should render the first skill', () => {
    const rendered = shallow(<Skills />)
    expect(
      rendered
        .find(Skill)
        .first()
        .props().first
    ).toBeTruthy()
  })

  test('should render the last skill', () => {
    const rendered = shallow(<Skills />)
    expect(
      rendered
        .find(Skill)
        .last()
        .props().last
    ).toBeTruthy()
  })

  test('should render Skill with padding-right 2rem on default', () => {
    const rendered = shallow(<Skill />)
    expect(rendered).toHaveStyleRule('padding-right', '2rem')
  })

  test('should render Skill with padding-right 0 on last skill', () => {
    const rendered = shallow(<Skill last />)
    expect(rendered).toHaveStyleRule('padding-right', '0')
  })
})
