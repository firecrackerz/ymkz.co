import * as React from 'react'
import nl2br from 'react-nl2br'
import styled from 'styled-components'

interface Props {
  children: string
}

const ProductDescription = ({ children }: Props) => (
  <Container>{nl2br(children)}</Container>
)

const Container = styled.div`
  letter-spacing: 0.5px;
  line-height: 1.8rem;
  padding: 24px 0;
`

export default ProductDescription
