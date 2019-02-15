import React from 'react'
import Layout from '../components/abstracts/layout'
import Container from '../components/abstracts/container'
import Portfolio from '../components/modules/portfolio'
import Narosirase from '../components/modules/narosirase'
import Cancelctures from '../components/modules/cancelctures'

export default function Work() {
  return (
    <Layout>
      <Container>
        <Portfolio />
        <Narosirase />
        <Cancelctures />
      </Container>
    </Layout>
  )
}
