import React from 'react'
import styled from 'styled-components'
import Narosirase from './Narosirase'
import Cancelectures from './Cancelectures'

const Work = () => (
  <Container>
    <Narosirase />
    <Separator />
    <Cancelectures />
    <Separator />
  </Container>
)

export default Work

const Container = styled.div`width: 100%;`

const Separator = styled.div`
  height: 128px;
  width: 100%;
`
