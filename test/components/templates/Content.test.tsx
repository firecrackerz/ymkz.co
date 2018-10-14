import { shallow } from 'enzyme'
import * as React from 'react'
import Content from 'src/components/templates/Content'

describe('src/components/templates/Content.tsx', () => {
  test('Rendered <Content />', () => {
    const rendered = shallow(<Content />)
    expect(rendered).toBeTruthy()
  })
})
