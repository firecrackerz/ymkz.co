import { shallow } from 'enzyme'
import * as React from 'react'
import Layout from 'src/components/templates/Layout'

describe('src/components/templates/Layout.tsx', () => {
  test('Rendered <Layout />', () => {
    const rendered = shallow(<Layout />)
    expect(rendered).toBeTruthy()
  })
})
