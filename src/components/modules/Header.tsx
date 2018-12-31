import styled from '@emotion/styled/macro'
import * as React from 'react'
import { constraints } from '../../constants'
import Row from '../abstracts/Row'
import NavLink from '../elements/NavLink'

export default function Header() {
  return (
    <Container>
      <Row space={16}>
        <img src="/images/icon_logo.png" alt="logo" height={24} width={24} />
        <NavLink exact precache href="/" activeClassName="active">
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink exact precache href="/about/" activeClassName="active">
          about
        </NavLink>
        <NavLink exact precache href="/work/" activeClassName="active">
          work
        </NavLink>
      </Row>
    </Container>
  )
}

const Container = styled('header')`
  align-items: center;
  display: flex;
  height: ${constraints.headerHeightPx};
  justify-content: space-between;
  padding: 0 48px;
  @media (max-width: ${constraints.mobileWidthPx}) {
    padding: 0 16px;
  }
`
