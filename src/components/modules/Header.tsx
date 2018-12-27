import styled from '@emotion/styled/macro'
import * as React from 'react'
import Row from '../abstracts/Row'
import NavLink from '../elements/NavLink'

export default function Header() {
  return (
    <Container>
      <Row space={16}>
        <img src="/images/icon_logo.png" alt="logo" height={24} width={24} />
        <NavLink exact precache href="/" activeClassName="activeNavLink">
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink exact precache href="/about/" activeClassName="activeNavLink">
          about
        </NavLink>
        <NavLink exact precache href="/work/" activeClassName="activeNavLink">
          work
        </NavLink>
      </Row>
    </Container>
  )
}

const Container = styled('header')`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 48px;
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`
