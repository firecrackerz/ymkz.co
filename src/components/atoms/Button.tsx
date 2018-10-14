import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

const Button = styled.button`
  background-color: ${colors.black.dark};
  border-radius: 4px;
  color: ${colors.white};
  padding: 0.5rem 1.5rem;
  -webkit-appearance: button;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.black.dark}, 0 0 0 4px ${colors.black.middle};
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export default Button
