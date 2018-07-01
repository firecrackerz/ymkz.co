import * as React from 'react'
import ProductDescription from 'src/components/atoms/ProductDescription'
import ProductSubtitle from 'src/components/atoms/ProductSubtitle'
import ProductTitle from 'src/components/atoms/ProductTitle'
import ProductImages from 'src/components/molecules/ProductImages'
import ProductLinks from 'src/components/molecules/ProductLinks'

export interface ProductImageData {
  src: string
  dark?: boolean
  landscape?: boolean
}

export interface ProductLinkData {
  name: string
  url: string
}

export interface ProductData {
  title: string
  subtitle: string
  description: string
  images: ProductImageData[]
  links: ProductLinkData[]
}

const Product = (product: ProductData) => (
  <section>
    <ProductTitle>{product.title}</ProductTitle>
    <ProductSubtitle>{product.subtitle}</ProductSubtitle>
    <ProductDescription>{product.description}</ProductDescription>
    <ProductImages images={product.images} />
    <ProductLinks links={product.links} />
  </section>
)

export default Product
