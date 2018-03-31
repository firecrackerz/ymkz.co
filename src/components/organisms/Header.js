import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Heading from '../molecules/Heading'
import Navigation from '../molecules/Navigation'

const Container = styled.header`
  align-items: center;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
`

const Header = ({ location: { pathname } }) => (
  <Container>
    <Heading />
    <Navigation pathname={pathname} />
  </Container>
)

export default withRouter(Header)
