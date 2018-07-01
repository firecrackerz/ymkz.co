import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Name = ({ children }: Props) => <Container>{children}</Container>

export default Name

const Container = styled.p`
  color: ${color.middleBlack};
  font-family: 'Futura', sans-serif;
  font-size: 8.5rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`
