import * as React from 'react'
import { css, default as styled } from 'react-emotion'
import MediaQuery from 'react-responsive'
import { match as Match } from 'react-router-dom'
import NavLink from 'src/components/NavLink'
import Row from 'src/components/Row'

function isActive(match: Match) {
  return !!match
}

const activeClassName = css`
  font-weight: 700 !important;
`

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 48px;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const Text = styled.div`
  font-family: Futura;
`

function Header() {
  return (
    <Container>
      <Row space={4}>
        <NavLink to="/" isActive={isActive} activeClassName={activeClassName}>
          ymkz
        </NavLink>
        <MediaQuery minDeviceWidth={767}>
          {matches => matches && <Text>is frontend engineer</Text>}
        </MediaQuery>
      </Row>
      <Row space={20}>
        <NavLink to="/about" isActive={isActive} activeClassName={activeClassName}>
          about
        </NavLink>
        <NavLink to="/work" isActive={isActive} activeClassName={activeClassName}>
          work
        </NavLink>
      </Row>
    </Container>
  )
}

export default Header
