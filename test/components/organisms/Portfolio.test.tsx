import { shallow } from 'enzyme'
import * as React from 'react'
import Portfolio from 'src/components/organisms/Portfolio'

describe('src/components/organisms/Portfolio.tsx', () => {
  test('Rendered <Portfolio />', () => {
    const rendered = shallow(<Portfolio />)
    expect(rendered).toBeTruthy()
  })
})
