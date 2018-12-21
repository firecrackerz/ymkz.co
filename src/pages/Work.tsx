import * as React from 'react'
import Container from '../components/abstracts/Container'
import Cancelectures from '../components/modules/Cancelectures'
import Narosirase from '../components/modules/Narosirase'
import Portfolio from '../components/modules/Portfolio'

export default function Work() {
  return (
    <Container>
      <Portfolio />
      <Narosirase />
      <Cancelectures />
    </Container>
  )
}
