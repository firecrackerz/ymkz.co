import React from 'react'
import styled from 'styled-components'
import Narosirase from './Narosirase'
import Cancelectures from './Cancelectures'

const WorkContainer = () => (
  <Container>
    <Narosirase />
    <Cancelectures />
  </Container>
)

export default WorkContainer

const Container = styled.div`
  padding-bottom: 128px;
`
