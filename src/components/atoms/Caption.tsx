import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Caption = ({ children }: Props) => <Container>{children}</Container>

export default Caption

const Container = styled.h2`
  color: ${color.white};
  font-family: 'Futura';
  font-weight: 700;
  text-transform: uppercase;
`
