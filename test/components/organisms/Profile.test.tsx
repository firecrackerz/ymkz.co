import { shallow } from 'enzyme'
import * as React from 'react'
import Profile from 'src/components/organisms/Profile'

describe('src/components/organisms/Profile.tsx', () => {
  test('Rendered <Profile />', () => {
    const rendered = shallow(<Profile />)
    expect(rendered).toBeTruthy()
  })
})
