import styled from '@emotion/styled'
import colors from '../../constants/colors'

export default styled.input`
  background-color: ${colors.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 1rem;
  padding: 0.6rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &::placeholder {
    color: ${colors.light};
  }
`
