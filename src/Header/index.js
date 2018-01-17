import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import styled from 'styled-components'

const Header = ({ router: { location: { pathname } }, push }) => (
  <HeaderContainer>
    <div>
      <HeaderTitleLink to="/">ymkz</HeaderTitleLink>
      <HeaderTitleRole>is front-end engineer</HeaderTitleRole>
    </div>
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
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
`

const HeaderTitleLink = styled(Link)`
  color: #fefeff;
  font-weight: 900;
  text-decoration: none;
`

const HeaderTitleRole = styled.span`
  color: #63637e;
  font-size: 0.75rem;
  padding-left: 0.35rem;
  vertical-align: bottom;

  @media (max-width: 768px) {
    display: none;
  }
`

const HeaderNavigation = styled.div`
  align-items: center;
  display: flex;
`

const HeaderNavLink = styled.div`
  color: ${({ active }) => (active ? '#fefeff' : '#eceff1')};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${({ active }) => active && 900};
  padding: 0 1rem;
  padding-left: ${({ first }) => first && 0};
  padding-right: ${({ last }) => last && 0};

  @media (max-width: 768px) {
    padding: 0 0.4rem;
    padding-left: ${({ first }) => first && 0};
    padding-right: ${({ last }) => last && 0};
  }
`
