import { shallow } from 'enzyme'
import * as React from 'react'
import Header from 'src/components/organisms/Header'

describe('src/components/organisms/Header.tsx', () => {
  test('Rendered <Header />', () => {
    const rendered = shallow(<Header />)
    expect(rendered).toBeTruthy()
  })
})
