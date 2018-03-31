import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled(Link)`
  color: var(--nord6);
  font-weight: ${props => props.active};
  margin: 0 0.6rem;
  text-decoration: none;
  &:visited,
  &:active,
  &:focus {
    color: var(--nord6);
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Nav = ({ name, to, active }) => (
  <Container to={to} active={active}>
    {name}
  </Container>
)

export default Nav
