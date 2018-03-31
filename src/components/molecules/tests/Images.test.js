import React from 'react'
import { shallow } from 'enzyme'
import Images from '../Images'
import narosirase1 from '../../../images/narosirase1.jpg'
import narosirase2 from '../../../images/narosirase2.jpg'

const images = [
  {
    src: narosirase1
  },
  {
    src: narosirase2
  }
]

it('rendered Images component', () => {
  const rendered = shallow(<Images images={images} />).dive()
  expect(rendered.type()).toEqual('div')
})
