import { shallow } from 'enzyme'
import * as React from 'react'
import Whoami from 'src/components/organisms/Whoami'

describe('src/components/organisms/Whoami.tsx', () => {
  test('Rendered <Whoami />', () => {
    const rendered = shallow(<Whoami />)
    expect(rendered).toBeTruthy()
  })
})
