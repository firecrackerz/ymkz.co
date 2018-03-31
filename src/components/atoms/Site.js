import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled(Link)`
  color: var(--nord6);
  font-size: 1.15rem;
  text-decoration: none;
  &:visited,
  &:active,
  &:focus {
    color: var(--nord6);
  }
`

const Site = ({ children = 'ymkz' }) => <Container to="/">{children}</Container>

export default Site
