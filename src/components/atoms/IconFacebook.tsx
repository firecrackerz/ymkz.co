import * as React from 'react'
import { color, constraint } from 'src/constants'
import styled from 'styled-components'
import { Facebook } from 'styled-icons/fa-brands/Facebook'

const IconGithub = () => (
  <Link href="https://facebook.com/ymkzly" rel="noopener noreferrer" target="_blank">
    <Facebook size={constraint.iconSize} color={color.white} />
  </Link>
)

export default IconGithub

const Link = styled.a`
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:not(:first-child) {
    margin-left: 16px;
  }
`
