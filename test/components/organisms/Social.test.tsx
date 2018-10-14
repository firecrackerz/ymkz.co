import { shallow } from 'enzyme'
import * as React from 'react'
import Social from 'src/components/organisms/Social'

describe('src/components/organisms/Social.tsx', () => {
  test('Rendered <Social />', () => {
    const rendered = shallow(<Social />)
    expect(rendered).toBeTruthy()
  })
})
