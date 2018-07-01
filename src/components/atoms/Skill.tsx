import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Skill = ({ children }: Props) => <Container>{children}</Container>

export default Skill

const Container = styled.span`
  color: ${color.white};
  font-family: 'Futura';
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 0.8rem;
  &:not(:last-child) {
    padding-right: 2rem;
  }
`
