import * as React from 'react'
import { ProductLinkData } from 'src/components/templates/Product'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  link: ProductLinkData
}

const ProductImage = ({ link }: Props) => (
  <Container>
    <Link href={link.url} rel="noopener noreferrer" target="_blank">
      {link.name}
    </Link>
  </Container>
)

export default ProductImage

const Container = styled.li`
  padding: 6px;
`

const Link = styled.a`
  color: ${color.white};
`
