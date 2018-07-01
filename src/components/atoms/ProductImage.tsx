import * as React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { ProductImageData } from 'src/components/templates/Product'
import { color, constraint } from 'src/constants'

interface Props {
  image: ProductImageData
}

const ProductImage = ({ image }: Props) => (
  <ImageZoom
    image={{
      alt: '',
      src: image.src,
      style: {
        border: image.dark ? `1px solid ${color.lightBlack}` : 0,
        marginRight: constraint.imageGutter,
        width: image.landscape
          ? constraint.imageWidthLandscape
          : constraint.imageWidthPortrait
      }
    }}
    defaultStyles={{
      overlay: { backgroundColor: color.alphaBlack }
    }}
  />
)

export default ProductImage
