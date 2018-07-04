import * as React from 'react'
import { color } from 'src/constants'
import styled, { keyframes } from 'styled-components'
import { Spinner } from 'styled-icons/fa-solid/Spinner'

const Loading = () => (
  <Container>
    <Icon />
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

const Icon = Spinner.extend`
  animation: ${spin} 2.5s linear infinite;
  color: ${color.white};
  height: 42px;
  width: 42px;
`
