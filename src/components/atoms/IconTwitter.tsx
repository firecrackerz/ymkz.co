import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'
import { TwitterSquare } from 'styled-icons/fa-brands/TwitterSquare'

const IconTwitter = () => (
  <Link href="https://twitter.com/ymkzly" rel="noopener noreferrer" target="_blank">
    <Icon />
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

const Icon = TwitterSquare.extend`
  color: ${color.white};
  width: 42px;
  height: 42px;
`
