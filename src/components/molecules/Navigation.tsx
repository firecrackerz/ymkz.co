import { Pathname } from 'history'
import * as React from 'react'
import Nav from 'src/components/atoms/Nav'
import styled from 'styled-components'

interface Props {
  pathname: Pathname
}

const Navigation = ({ pathname }: Props) => (
  <Container>
    <Nav
      weight={pathname === '/' || pathname === '/about' ? 700 : 300}
      to="/about"
    >
      about
    </Nav>
    <Nav weight={pathname === '/act' ? 700 : 300} to="/act">
      act
    </Nav>
    <Nav weight={pathname === '/work' ? 700 : 300} to="/work">
      work
    </Nav>
  </Container>
)

export default Navigation

const Container = styled.nav`
  display: flex;
  align-items: center;
`
