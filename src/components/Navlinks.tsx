import styled from '@emotion/styled'
import * as React from 'react'
import { match as Match, NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'

export default function Navlink(props: NavLinkProps) {
  return (
    <Link to={props.to} isActive={(match: Match) => !!match} activeStyle={{ fontWeight: 700 }}>
      {props.children}
    </Link>
  )
}

const Link = styled(RouterNavLink)`
  color: #eceff4;
  font-family: 'Renner*';
  font-weight: 300;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`
