// @flow
import * as React from 'react'
import styled from 'styled-components'
import Image from '~/components/atoms/Image.js'
import type { ImageProps } from '~/types'

const Container = styled.div`
  overflow: hidden;
  padding: 24px 0;
`

const Images = ({ images }: { images: Array<ImageProps> }) => (
  <Container>
    {images.map((image: ImageProps, index: number) => (
      <Image
        key={`${image.src}-${index}`}
        src={image.src}
        border={image.border}
        landscape={image.landscape}
        last={index === images.length - 1}
      />
    ))}
  </Container>
)

export default Images
