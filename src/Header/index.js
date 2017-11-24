import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'

const Header = ({ router: { location: { pathname } }, push }) => (
  <HeaderContainer>
    <HeaderTitleLink onClick={() => push('/')}>ymkz</HeaderTitleLink>
    <HeaderNavigation>
      <HeaderNavLink onClick={() => push('/about')} active={pathname === '/' || pathname === '/about'} first>
        about
      </HeaderNavLink>
      <HeaderNavLink onClick={() => push('/work')} active={pathname === '/work'} last>
        work
      </HeaderNavLink>
    </HeaderNavigation>
  </HeaderContainer>
)

export default connect(
  ({ router }) => ({
    router
  }),
  dispatch => ({
    push: to => dispatch(push(to))
  })
)(Header)

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`
const HeaderTitleLink = styled.div`
  font-weight: 900;
  cursor: pointer;
`
const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
`
const HeaderNavLink = styled.div`
  padding: 0 1rem;
  padding-right: ${({ last }) => last && 0};
  padding-left: ${({ first }) => first && 0};
  color: ${({ active }) => (active ? '#fefeff' : '#63637e')};
  font-size: 0.85rem;
  font-weight: ${({ active }) => active && 500};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 0.4rem;
    padding-right: ${({ last }) => last && 0};
    padding-left: ${({ first }) => first && 0};
  }
`
