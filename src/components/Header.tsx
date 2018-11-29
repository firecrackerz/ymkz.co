import styled from '@emotion/styled'
import * as React from 'react'
import MediaQuery from 'react-responsive'
import { match as Match } from 'react-router-dom'
import NavLink from 'src/components/NavLink'
import Row from 'src/components/Row'

function isActive(match: Match) {
  return !!match
}

const Container = styled('div')`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 48px;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const Text = styled('div')`
  font-family: Futura;
`

export default function Header() {
  return (
    <Container>
      <Row space={4}>
        <NavLink to="/" isActive={isActive} activeStyle={{ fontWeight: 700 }}>
          ymkz
        </NavLink>
        <MediaQuery minDeviceWidth={767}>
          {matches => matches && <Text>is frontend engineer</Text>}
        </MediaQuery>
      </Row>
      <Row space={20}>
        <NavLink to="/about" isActive={isActive} activeStyle={{ fontWeight: 700 }}>
          about
        </NavLink>
        <NavLink to="/work" isActive={isActive} activeStyle={{ fontWeight: 700 }}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}
