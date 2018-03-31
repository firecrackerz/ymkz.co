import React from 'react'
import styled from 'styled-components'
import Nav from '../atoms/Nav'

const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
`

const Navigation = ({ pathname }) => (
  <Container>
    <Nav
      name="about"
      to="/about"
      active={pathname === '/' || pathname === '/about' ? 700 : 300}
    />
    <Nav name="work" to="/work" active={pathname === '/work' ? 700 : 300} />
  </Container>
)

export default Navigation
