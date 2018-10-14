import * as React from 'react'
import styled from 'styled-components'
import mediumZoom from 'medium-zoom'
import { colors } from 'src/helpers/constants'

interface Props {
  orientation: 'landscape' | 'portrait'
}

const Container = styled.img<Props>`
  width: ${props => (props.orientation === 'landscape' ? 256 : 128)}px;
  border: 1px solid ${colors.black.light};
`

class Image extends React.Component<Props & React.ImgHTMLAttributes<never>> {
  zoom = mediumZoom({
    background: colors.black.alpha,
    margin: 16,
    scrollOffset: 0
  })

  render() {
    const { orientation, ...attrs } = this.props
    return (
      <Container orientation={orientation} {...attrs} ref={(ref: any) => this.zoom.attach(ref)} />
    )
  }
}

export default Image
