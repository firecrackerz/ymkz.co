import * as React from 'react'
import { color, constraint } from 'src/constants'
import styled, { keyframes } from 'styled-components'
import { DataUsage } from 'styled-icons/material/DataUsage'

const Loading = () => (
  <Container>
    <Icon size={constraint.iconSize} />
  </Container>
)

export default Loading

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

const Icon = DataUsage.extend`
  animation: ${spin} 2.5s linear infinite;
  color: ${color.white};
`
