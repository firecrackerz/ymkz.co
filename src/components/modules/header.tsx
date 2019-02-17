import React from 'react'
import styled from '@emotion/styled'
import { withRouter, WithRouterProps } from 'next/router'
import constraints from '../../constants/constraints'
import Row from '../abstracts/row'
import NavLink from '../elements/nav-link'

const Container = styled.header`
  align-items: center;
  display: flex;
  height: ${constraints.headerHeightPx};
  justify-content: space-between;
  padding: 0 48px;
  @media (max-width: ${constraints.mobileWidthPx}) {
    padding: 0 16px;
  }
`

function Header({ router }: WithRouterProps) {
  return (
    <Container>
      <Row space={16}>
        <img src="/static/images/logo_icon.png" alt="logo_icon" height={24} width={24} />
        <NavLink href="/" pathname={router && router.pathname}>
          ymkz
        </NavLink>
      </Row>
      <Row space={16}>
        <NavLink href="/about" pathname={router && router.pathname}>
          about
        </NavLink>
        <NavLink href="/work" pathname={router && router.pathname}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}

export default withRouter(Header)
