import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

const Text = styled.p`
  color: ${colors.white};
  font-family: Futura;
  font-size: 4.5rem;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 2.8rem;
  }
`

export default Text
