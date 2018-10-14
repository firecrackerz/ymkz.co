import { shallow } from 'enzyme'
import * as React from 'react'
import Row from 'src/components/templates/Row'

describe('src/components/templates/Row.tsx', () => {
  test('Rendered <Row />', () => {
    const rendered = shallow(<Row />)
    expect(rendered).toBeTruthy()
  })
})
