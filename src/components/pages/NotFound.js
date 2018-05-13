// @flow
import * as React from 'react'
import styled from 'styled-components'
import Site from '~/components/atoms/Site.js'
import Strong from '~/components/atoms/Strong.js'
import Message from '~/components/atoms/Message.js'

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
      <Site /> this site.
    </Message>
  </Container>
)

export default NotFound
