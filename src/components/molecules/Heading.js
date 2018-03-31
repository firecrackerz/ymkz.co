import React from 'react'
import styled from 'styled-components'
import Site from '../atoms/Site'
import Role from '../atoms/Role'

const Container = styled.h1`
  align-items: center;
  display: flex;
`

const Heading = () => (
  <Container>
    <Site />
    <Role />
  </Container>
)

export default Heading
