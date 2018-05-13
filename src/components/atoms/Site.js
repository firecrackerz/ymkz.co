// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '~/constants'

const Container = styled(Link)`
  color: ${color.white};
  font-family: 'Futura', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  &:visited,
  &:active,
  &:focus {
    color: ${color.white};
  }
`

const Site = () => <Container to="/">ymkz</Container>

export default Site
