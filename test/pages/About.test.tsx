import { shallow } from 'enzyme'
import * as React from 'react'
import About from 'src/pages/About'

describe('src/pages/About.tsx', () => {
  test('Rendered <About />', () => {
    shallow(<About />)
  })
})
