import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const Image = ({ src, landscape = false, border = false, last = false }) => (
  <ImageZoom
    image={{
      src: src,
      alt: '',
      style: {
        width: `${landscape ? '256px' : '128px'}`,
        border: `${border ? '1px solid var(--nord3)' : 0}`,
        marginRight: `${last ? 0 : '24px'}`
      }
    }}
    defaultStyles={{
      overlay: { backgroundColor: 'rgb(46, 52, 64, .8)' }
    }}
  />
)

export default Image
