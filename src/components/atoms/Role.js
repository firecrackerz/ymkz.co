import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-weight: 300;
  margin-left: 0.3rem;
  @media (max-width: 768px) {
    display: none;
  }
`

const Role = () => <Container>is front-end engineer</Container>

export default Role
