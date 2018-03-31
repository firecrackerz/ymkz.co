import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  margin: 12px 0;
`

const App = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: var(--nord6);
  font-family: 'OperatorMono', monospace;
  text-decoration: none;
`

const Link = ({ href, name }) => (
  <Container>
    <App href={href}>{name}</App>
  </Container>
)

export default Link
