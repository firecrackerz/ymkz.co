import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Aka = ({ children }: Props) => <Container>{children}</Container>

export default Aka

const Container = styled.p`
  color: ${color.white};
  font-family: 'Futura';
  font-size: 12rem;
  font-weight: 700;
  left: 0;
  position: absolute;
  top: 112px;
  @media (max-width: 768px) {
    font-size: 5.2rem;
    top: 100px;
  }
`
