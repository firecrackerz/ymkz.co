import * as React from 'react'
import { Link } from 'react-router-dom'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  to: string
  weight: number
  onMouseOver: () => void
  children: React.ReactChild
}

const Nav = ({ weight, to, onMouseOver, children }: Props) => (
  <Container weight={weight} to={to} onMouseOver={onMouseOver}>
    {children}
  </Container>
)

export default Nav

const Container = styled(Link)`
  color: ${color.white};
  font-family: 'Futura';
  font-weight: ${(props: Props) => props.weight};
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:not(:first-child) {
    margin-left: 8px;
  }
`
