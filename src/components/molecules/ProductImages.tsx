import * as React from 'react'
import ProductImage from 'src/components/atoms/ProductImage'
import { ProductImageData } from 'src/components/templates/Product'
import styled from 'styled-components'

interface Props {
  images: ProductImageData[]
}

const ProductImages = ({ images }: Props) => (
  <Container>{images.map(image => <ProductImage key={image.src} image={image} />)}</Container>
)

export default ProductImages

const Container = styled.div`
  padding: 24px 0px;
`
