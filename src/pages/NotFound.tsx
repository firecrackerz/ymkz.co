import styled from '@emotion/styled/macro'
import * as React from 'react'
import { colors } from '../constants'

export default function NotFound() {
  return (
    <Container>
      <Text>404 Not Found</Text>
    </Container>
  )
}

const Container = styled('div')`
  align-items: center;
  display: flex;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Text = styled('p')`
  color: ${colors.white};
  font-family: 'Jost*';
  font-weight: 300;
  margin: 0;
`
