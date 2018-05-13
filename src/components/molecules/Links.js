// @flow
import * as React from 'react'
import styled from 'styled-components'
import Link from '~/components/atoms/Link.js'
import type { LinkProps } from '~/types'

const Container = styled.div`
  padding: 24px 0;
`

const Links = ({ links }: { links: Array<LinkProps> }) => (
  <Container>
    {links.map((app, index) => (
      <Link key={`${app.name}-${index}`} href={app.href} name={app.name} />
    ))}
  </Container>
)

export default Links
