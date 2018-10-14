import { shallow } from 'enzyme'
import * as React from 'react'
import Narosirase from 'src/components/organisms/Narosirase'

describe('src/components/organisms/Narosirase.tsx', () => {
  test('Rendered <Narosirase />', () => {
    const rendered = shallow(<Narosirase />)
    expect(rendered).toBeTruthy()
  })
})
