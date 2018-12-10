import styled from '@emotion/styled'

export default styled('button')`
  background-color: #3b4252;
  border: 0;
  border-radius: 4px;
  color: #eceff4;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  -webkit-appearance: button;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`