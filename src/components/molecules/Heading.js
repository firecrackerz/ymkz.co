// @flow
import * as React from 'react'
import styled from 'styled-components'
import Site from '~/components/atoms/Site.js'
import Role from '~/components/atoms/Role.js'

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
