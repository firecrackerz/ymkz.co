import styled from '@emotion/styled/macro'
import * as React from 'react'
import { NavConsumer } from 'react-navi'
import Row from '../abstracts/Row'
import Navlink from '../elements/Navlink'

export default function Header() {
  return (
    <NavConsumer>
      {({ url }) => (
        <Container>
          <Row space={16}>
            <img src="/images/icon_logo.png" alt="" height={24} width={24} />
            <Navlink href="/" pathname={url.pathname}>
              ymkz
            </Navlink>
          </Row>
          <Row space={16}>
            <Navlink href="/about/" pathname={url.pathname}>
              about
            </Navlink>
            <Navlink href="/work/" pathname={url.pathname}>
              work
            </Navlink>
          </Row>
        </Container>
      )}
    </NavConsumer>
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
