import React from 'react'
import styled from 'styled-components'

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  background-image: url(${props => props.image});
  height: 32px;
  margin: 0 16px;
  text-decoration: none;
  width: 32px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Icon = ({ href, image }) => <Link href={href} image={image} />

export default Icon
