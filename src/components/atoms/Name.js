// @flow
import styled from 'styled-components'
import { color } from '~/constants'

const Name = styled.p`
  color: ${color.middleBlack};
  font-family: 'Futura', sans-serif;
  font-size: 8.5rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

export default Name
