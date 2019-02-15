import React from 'react'
import Router from 'next/router'
import { render, cleanup } from 'react-testing-library'
import { mockedRouter } from '../../../mocks'
import Header from '../header'

Router.router = mockedRouter

afterEach(cleanup)

describe('<Header />', () => {
  test('rendered', () => {
    const rendered = render(<Header />)
    expect(rendered).toBeTruthy()
  })
})
