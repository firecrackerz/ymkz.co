import React from 'react'
import { shallow } from 'enzyme'
import Image from '../Image'
import portfolio1 from '../../../images/portfolio1.jpg'

it('rendered Image component', () => {
  const rendered = shallow(<Image src={portfolio1} />)
  expect(rendered).toBeTruthy()
})
