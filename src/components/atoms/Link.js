// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { LinkProps } from '~/types'

const Container = styled.li`
  margin: 12px 0;
`

const App = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: var(--nord6);
  text-decoration: none;
`

const Link = ({ href, name }: LinkProps) => (
  <Container>
    <App href={href}>{name}</App>
  </Container>
)

export default Link
