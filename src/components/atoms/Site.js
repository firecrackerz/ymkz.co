// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled(Link)`
  color: var(--nord6);
  font-family: 'Futura', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  &:visited,
  &:active,
  &:focus {
    color: var(--nord6);
  }
`

const Site = () => <Container to="/">ymkz</Container>

export default Site
