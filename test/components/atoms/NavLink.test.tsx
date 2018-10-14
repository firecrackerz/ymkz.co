import { shallow } from 'enzyme'
import * as React from 'react'
import NavLink from 'src/components/atoms/NavLink'

describe('src/components/organisms/NavLink.tsx', () => {
  test('Rendered <NavLink to="/" />', () => {
    const rendered = shallow(<NavLink to="/" />)
    expect(rendered).toBeTruthy()
  })
})
