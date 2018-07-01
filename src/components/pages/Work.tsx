import * as React from 'react'
import Product from 'src/components/templates/Product'
import { cancelectures, constraint, narosirase, portfolio } from 'src/constants'
import styled from 'styled-components'

const Work = () => (
  <Container>
    <Product {...portfolio} />
    <Product {...narosirase} />
    <Product {...cancelectures} />
  </Container>
)

export default Work

const Container = styled.div`
  padding-bottom: ${constraint.bottomPadding};
`
