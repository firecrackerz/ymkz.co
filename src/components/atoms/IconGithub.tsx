import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare'

const IconGithub = () => (
  <Link href="https://github.com/ymkz" rel="noopener noreferrer" target="_blank">
    <Icon />
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

const Icon = GithubSquare.extend`
  color: ${color.white};
  width: 42px;
  height: 42px;
`
