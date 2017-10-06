import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { colors } from '../constants'
import Default from './Default'
import Mobile from './Mobile'

const Header = ({ router }) => (
  <Container>
    <Default>
      <DefaultNav>
        <Title>
          <TitleLink to="/">ymkz</TitleLink>
          <Role>front-end engineer</Role>
        </Title>
        <NavLink to="/about">
          about {(router.location.pathname === '/' || router.location.pathname === '/about') && <Active>●</Active>}
        </NavLink>
        <NavLink to="/work">work {router.location.pathname === '/work' && <Active>●</Active>}</NavLink>
      </DefaultNav>
    </Default>
    <Mobile>
      <MobileNav>
        <Title>
          <TitleLink to="/">ymkz</TitleLink>
        </Title>
        <NavLink to="/about">
          about {(router.location.pathname === '/' || router.location.pathname === '/about') && <Active>●</Active>}
        </NavLink>
        <NavLink to="/work">work {router.location.pathname === '/work' && <Active>●</Active>}</NavLink>
      </MobileNav>
    </Mobile>
  </Container>
)

export default connect(({ router }) => ({
  router
}))(Header)

const Container = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
`

const DefaultNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 100px;
`

const MobileNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 24px;
`

const Title = styled.div`
  font-weight: bold;
  margin-right: auto;
`

const Role = styled.span`
  color: ${colors.ashesGrey};
  font-size: 0.85em;
  padding-left: 8px;
`

const TitleLink = styled(Link)`
  color: ${colors.ghostWhite};
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: ${colors.ghostWhite};
  text-decoration: none;
  font-size: 0.85em;
  margin: 0 8px;
`

const Active = styled.span`
  font-size: 8px;
  color: ${colors.activeLight};
  text-shadow: 1px 1px 2px black, 0 0 1em ${colors.activeLight}, 0 0 0.2em ${colors.activeLight};
`
