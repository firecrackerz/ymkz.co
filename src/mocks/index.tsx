import React from 'react'
import { RouterProps } from 'next/router'

export const mockedRouter: RouterProps = {
  asPath: '/',
  route: '/',
  pathname: '/',
  query: {},
  back: () => {},
  beforePopState: () => true,
  prefetch: () => new Promise(resolve => resolve()),
  push: () => new Promise(resolve => resolve()),
  reload: () => new Promise(resolve => resolve()),
  replace: () => new Promise(resolve => resolve()),
  events: {
    on: () => {},
    off: () => {}
  },
  components: {
    mock: {
      Component: function Mock() {
        return <></>
      },
      err: new Error()
    }
  }
}
