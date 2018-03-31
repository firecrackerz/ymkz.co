import React from 'react'
import styled from 'styled-components'
import mediumZoom from 'medium-zoom'

const Container = styled.img`
  width: ${props => (props.landscape ? '256px' : '128px')};
  border: ${props => (props.border ? '1px solid var(--nord3)' : 0)};
  margin-right: ${props => (props.last ? 0 : '24px')};
`

class Image extends React.PureComponent {
  static defaultProps = {
    landscape: false,
    border: false,
    last: false
  }

  zoom = image => {
    mediumZoom(image, {
      background: 'rgb(46, 52, 64, .8)',
      scrollOffset: 24,
      margin: 16
    })
  }

  render() {
    return (
      <Container
        innerRef={this.zoom}
        src={this.props.src}
        landscape={this.props.landscape}
        border={this.props.border}
        last={this.props.last}
      />
    )
  }
}

export default Image

// const Image = ({ src, landscape = false, border = false, last = false }) => (
//   <ImageZoom
//     image={{
//       src: src,
//       alt: '',
//       style: {
//         width: `${landscape ? '256px' : '128px'}`,
//         border: `${border ? '1px solid var(--nord3)' : 0}`,
//         marginRight: `${last ? 0 : '24px'}`
//       }
//     }}
//     defaultStyles={{
//       overlay: { backgroundColor: 'rgba(34, 34, 42, .8)' }
//     }}
//   />
// )
