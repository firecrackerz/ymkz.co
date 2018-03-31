import React from 'react'
import styled from 'styled-components'
import Code from '../atoms/Code'
import Site from '../atoms/Site'
import Strong from '../atoms/Strong'
import Message from '../atoms/Message'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - var(--header-height) - var(--bottom-padding));
  justify-content: center;
`

const NotFound = () => (
  <Container>
    <Strong>404</Strong>
    <Strong>Page Not Found</Strong>
    <Message>
      sorry, this is invalid url access.<br />go back your page or jump to{' '}
      <Site>
        <Code>/</Code>
      </Site>{' '}
      this site.
    </Message>
  </Container>
)

export default NotFound
