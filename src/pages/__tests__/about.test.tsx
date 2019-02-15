import React from 'react'
import Router from 'next/router'
import { render, cleanup } from 'react-testing-library'
import { mockedRouter } from '../../mocks'
import About from '../about'

Router.router = mockedRouter

afterEach(cleanup)

describe('<About />', () => {
  test('rendered', () => {
    const rendered = render(<About />)
    expect(rendered).toBeTruthy()
  })
})
