// @flow
import styled from 'styled-components'
import { color } from '~/constants'

const Aka = styled.p`
  color: ${color.white};
  font-family: 'Futura', sans-serif;
  font-size: 12rem;
  font-weight: 700;
  left: 0;
  position: absolute;
  top: 140px;
  @media (max-width: 768px) {
    font-size: 5.2rem;
    top: 110px;
  }
`

export default Aka
