import { shallow } from 'enzyme'
import * as React from 'react'
import Skills from 'src/components/organisms/Skills'

describe('src/components/organisms/Skills.tsx', () => {
  test('Rendered <Skills />', () => {
    const rendered = shallow(<Skills />)
    expect(rendered).toBeTruthy()
  })
})
