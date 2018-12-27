import styled from '@emotion/styled/macro'
import * as React from 'react'
import { colors, constraints } from '../constants'

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
  height: calc(100vh - ${constraints.headerHeightPx});
  justify-content: center;
  padding-bottom: ${constraints.headerHeightPx};
`

const Text = styled('p')`
  color: ${colors.white};
  font-family: 'Jost*';
  font-weight: 300;
  margin: 0;
`
