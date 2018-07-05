import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Intro = ({ children }: Props) => <Container>{children}</Container>

export default Intro

const Container = styled.p`
  color: ${color.white};
  font-family: 'Futura';
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6;
  padding-top: 1rem;
`
