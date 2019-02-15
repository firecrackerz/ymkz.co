import React from 'react'
import Router from 'next/router'
import { render, cleanup } from 'react-testing-library'
import { mockedRouter } from '../../mocks'
import Work from '../work'

Router.router = mockedRouter

afterEach(cleanup)

describe('<Work />', () => {
  test('rendered', () => {
    const rendered = render(<Work />)
    expect(rendered).toBeTruthy()
  })
})
