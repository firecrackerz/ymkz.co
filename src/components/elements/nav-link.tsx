import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  pathname: string | undefined
  href: string
}

interface AnchorProps {
  active: boolean
  root: boolean
}

const Anchor = styled.a`
  font-family: 'Jost';
  font-weight: ${({ active, root }: AnchorProps) => (active || root ? '700' : '300')};
  pointer-events: ${({ active }: AnchorProps) => active && 'none'};
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`

function NavLink({ children, pathname, href }: Props) {
  const prefetch = () => Router.prefetch(href)
  return (
    <Link href={href}>
      <Anchor
        root={href === '/'}
        active={pathname === href}
        onFocus={prefetch}
        onMouseOver={prefetch}
      >
        {children}
      </Anchor>
    </Link>
  )
}

export default withRouter(NavLink)
