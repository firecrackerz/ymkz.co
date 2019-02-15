import React from 'react'
import { render, cleanup } from 'react-testing-library'
import NavLink from '../nav-link'

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

afterEach(cleanup)

describe('<NavLink />', () => {
  test('rendered', () => {
    const rendered = render(
      <NavLink href="/mock-href" pathname="mock-pathname">
        mock
      </NavLink>
    )
    expect(rendered).toBeTruthy()
  })
})
