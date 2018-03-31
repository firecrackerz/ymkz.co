import React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'

const Container = styled.div`
  overflow: hidden;
  padding: 24px 0;
`

const Images = ({ images }) => (
  <Container>
    {images.map((image, index) => (
      <Image
        key={`${image}-${index}`}
        src={image.src}
        landscape={image.landscape}
        border={image.border}
        last={index === images.length - 1}
      />
    ))}
  </Container>
)

export default Images
