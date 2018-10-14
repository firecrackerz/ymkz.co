import { shallow } from 'enzyme'
import * as React from 'react'
import Text from 'src/components/atoms/Text'

describe('src/components/organisms/Text.tsx', () => {
  test('Rendered <Text />', () => {
    const rendered = shallow(<Text />)
    expect(rendered).toBeTruthy()
  })
})
