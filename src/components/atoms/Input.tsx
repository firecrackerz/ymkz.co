import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

const Input = styled.input`
  background-color: ${colors.black.dark};
  border-radius: 4px;
  color: ${colors.white};
  margin: 0.25rem 0;
  padding: 0.5rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.black.dark}, 0 0 0 4px ${colors.black.middle};
    outline: none;
  }
  &::placeholder {
    color: ${colors.black.light};
  }
`

export default Input
