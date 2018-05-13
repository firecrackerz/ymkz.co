// @flow
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import type { ContextRouter } from 'react-router-dom'
import styled from 'styled-components'
import Heading from '~/components/molecules/Heading.js'
import Navigation from '~/components/molecules/Navigation.js'

const Container = styled.header`
  align-items: center;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
`

const Header = ({ location: { pathname } }: ContextRouter) => (
  <Container>
    <Heading />
    <Navigation pathname={pathname} />
  </Container>
)

export default withRouter(Header)
