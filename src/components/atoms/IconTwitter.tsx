import * as React from 'react'
import { color, constraint } from 'src/constants'
import styled from 'styled-components'
import { TwitterSquare } from 'styled-icons/fa-brands/TwitterSquare'

const IconTwitter = () => (
  <Link href="https://twitter.com/ymkzly" rel="noopener noreferrer" target="_blank">
    <TwitterSquare size={constraint.iconSize} color={color.white} />
  </Link>
)

export default IconTwitter

const Link = styled.a`
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:not(:first-child) {
    margin-left: 16px;
  }
`
