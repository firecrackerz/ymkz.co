import { shallow } from 'enzyme'
import * as React from 'react'
import Contact from 'src/components/organisms/Contact'

describe('src/components/organisms/Contact.tsx', () => {
  test('Rendered <Contact />', () => {
    const rendered = shallow(<Contact />)
    expect(rendered).toBeTruthy()
  })
})
