import { shallow } from 'enzyme'
import * as React from 'react'
import Section from 'src/components/templates/Section'

describe('src/components/templates/Section.tsx', () => {
  test('Rendered <Section />', () => {
    const rendered = shallow(<Section />)
    expect(rendered).toBeTruthy()
  })
})
