import React from 'react'
import styled from 'styled-components'
import Link from '../atoms/Link'

const Container = styled.div`
  padding: 24px 0;
`

const Links = ({ links }) => (
  <Container>
    {links.map((app, index) => (
      <Link key={`${app.href}-${index}`} href={app.href} name={app.name} />
    ))}
  </Container>
)

export default Links
