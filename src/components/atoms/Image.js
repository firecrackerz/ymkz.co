// @flow
import * as React from 'react'
import styled from 'styled-components'
import mediumZoom from 'medium-zoom'
import { color } from '~/constants'
import type { ImageProps } from '~/types'

const Container = styled.img`
  border: ${props => (props.border ? `1px solid ${color.lightBlack}` : 0)};
  margin-right: ${props => (props.last ? 0 : '24px')};
  width: ${props => (props.landscape ? '256px' : '128px')};
`

const Image = ({
  src,
  border,
  landscape,
  last
}: ImageProps & { last: boolean }) => (
  <Container
    src={src}
    border={border}
    landscape={landscape}
    last={last}
    innerRef={image =>
      mediumZoom(image, {
        background: 'rgb(46, 52, 64, .8)',
        scrollOffset: 0,
        margin: 32
      })
    }
  />
)

export default Image
