import React from 'react'
import { shallow } from 'enzyme'
import Links from '../Links'

const links = [
  {
    href: 'https://github.com/ymkz/narosirase',
    name: 'Repository - GitHub(ymkz/narosirase)'
  },
  {
    href: 'https://expo.io/@ymkz/narosirase',
    name: 'Expo - @ymkz/narosirase'
  }
]

it('rendered Links component', () => {
  const rendered = shallow(<Links links={links} />).dive()
  expect(rendered.type()).toEqual('div')
})
