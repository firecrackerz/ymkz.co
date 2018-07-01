import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const ProductSubtitle = ({ children }: Props) => (
  <Container>{children}</Container>
)

const Container = styled.h3`
  font-family: 'Futura', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export default ProductSubtitle
