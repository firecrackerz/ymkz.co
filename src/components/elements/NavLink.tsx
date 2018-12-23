import styled from '@emotion/styled/macro'
import * as React from 'react'
import * as ReactNavi from 'react-navi'
import { colors } from '../../constants'

interface Props {
  href: string
  pathname: string
  children: React.ReactChild
}

export default function NavLink(props: Props) {
  return (
    <NavAnchor
      precache
      disabled={props.pathname === props.href}
      active={props.pathname === props.href || props.href === '/'}
      activeClassName="activeNavLink"
      href={props.href}
    >
      {props.children}
    </NavAnchor>
  )
}

const NavAnchor = styled(ReactNavi.NavLink)`
  color: ${colors.white};
  font-family: 'Renner*';
  font-weight: 300;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
  &.activeNavLink {
    cursor: auto;
    font-weight: bold;
    text-decoration-line: none;
    &:hover {
      cursor: ${props => props.href === '/' && !props.disabled && 'pointer'};
      text-decoration-line: ${props => props.href === '/' && !props.disabled && 'underline'};
    }
  }
`
