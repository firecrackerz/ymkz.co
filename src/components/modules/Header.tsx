import styled from '@emotion/styled/macro'
import * as React from 'react'
import * as ReactNavi from 'react-navi'
import Row from '../abstracts/Row'
import NavLink from '../elements/NavLink'

export default function Header() {
  return (
    <ReactNavi.NavRoute>
      {({ url }) => (
        <Container>
          <Row space={16}>
            <img src="/images/icon_logo.png" alt="" height={24} width={24} />
            <NavLink href="/" pathname={url.pathname}>
              ymkz
            </NavLink>
          </Row>
          <Row space={16}>
            <NavLink href="/about/" pathname={url.pathname}>
              about
            </NavLink>
            <NavLink href="/work/" pathname={url.pathname}>
              work
            </NavLink>
          </Row>
        </Container>
      )}
    </ReactNavi.NavRoute>
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
