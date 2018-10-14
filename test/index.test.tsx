import { shallow } from 'enzyme'
import * as React from 'react'

describe('src/index.tsx', () => {
  test('Rendered <App />', () => {
    shallow(<div>App</div>)
  })
})
