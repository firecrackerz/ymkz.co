import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const ProductTitle = ({ children }: Props) => (
  <Container id={children.toString().toLocaleLowerCase()}>{children}</Container>
)

const Container = styled.h2`
  font-family: 'Futura';
  font-size: 6rem;
  font-weight: 700;
  padding-top: 100px;
  @media (max-width: 768px) {
    font-size: 3rem;
    padding-top: 64px;
  }
`

export default ProductTitle
