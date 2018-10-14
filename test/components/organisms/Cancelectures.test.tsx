import { shallow } from 'enzyme'
import * as React from 'react'
import Cancelectures from 'src/components/organisms/Cancelectures'

describe('src/components/organisms/Cancelectures.tsx', () => {
  test('Rendered <Cancelectures />', () => {
    const rendered = shallow(<Cancelectures />)
    expect(rendered).toBeTruthy()
  })
})
