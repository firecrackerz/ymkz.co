import * as React from 'react'
import ProductLink from 'src/components/atoms/ProductLink'
import { ProductLinkData } from 'src/components/templates/Product'
import styled from 'styled-components'

interface Props {
  links: ProductLinkData[]
}

const ProductLinks = ({ links }: Props) => (
  <Container>{links.map(link => <ProductLink key={link.url} link={link} />)}</Container>
)

export default ProductLinks

const Container = styled.div`
  padding: 24px 0;
`
