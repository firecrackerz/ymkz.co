import React from 'react'
import styled from 'styled-components'

const NotFoundContainer = () => <Container>404 Not Found</Container>

export default NotFoundContainer

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 72px);
  justify-content: center;
`
