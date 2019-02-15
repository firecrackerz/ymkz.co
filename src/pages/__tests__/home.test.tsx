import React from 'react'
import Router from 'next/router'
import { render, cleanup } from 'react-testing-library'
import { mockedRouter } from '../../mocks'
import Home from '../home'

Router.router = mockedRouter

afterEach(cleanup)

describe('<Home />', () => {
  test('rendered', () => {
    const rendered = render(<Home />)
    expect(rendered).toBeTruthy()
  })
})
