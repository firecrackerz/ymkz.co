import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

const Text = styled.p`
  color: ${colors.white};
  font-family: Futura;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  margin-top: -1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 767px) {
    font-size: 1.3rem;
    margin-top: -0.8rem;
  }
`

export default Text
