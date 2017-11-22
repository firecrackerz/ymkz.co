import React from 'react'
import styled from 'styled-components'

const NotFoundContainer = () => <Container>404 Not Found</Container>

export default NotFoundContainer

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 72px);
`
