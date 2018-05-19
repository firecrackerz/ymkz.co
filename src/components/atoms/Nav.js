// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '~/constants'

const Container = styled(Link)`
  color: ${color.white};
  font-family: 'Futura', sans-serif;
  font-weight: ${props => props.active};
  margin: 0 0.6rem;
  text-decoration: none;
  &:visited,
  &:active,
  &:focus {
    color: ${color.white};
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Nav = ({
  name,
  to,
  active
}: {
  name: string,
  to: string,
  active: number
}) => (
  <Container to={to} active={active}>
    {name}
  </Container>
)

export default Nav
