// @flow
import * as React from 'react'
import styled from 'styled-components'
import { constraint } from '~/constants'
import Site from '~/components/atoms/Site'
import Strong from '~/components/atoms/Strong'
import Message from '~/components/atoms/Message'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: calc(
    100vh - ${constraint.headerHeight} - ${constraint.bottomPadding}
  );
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
