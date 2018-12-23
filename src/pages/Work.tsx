import * as React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../components/abstracts/Container'
import Cancelectures from '../components/modules/Cancelectures'
import Narosirase from '../components/modules/Narosirase'
import Portfolio from '../components/modules/Portfolio'

export default function Work() {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="http://ymkz.co/work/" />
      </Helmet>
      <Container>
        <Portfolio />
        <Narosirase />
        <Cancelectures />
      </Container>
    </React.Fragment>
  )
}
