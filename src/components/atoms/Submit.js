import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background-color: var(--nord1);
  border: 0;
  border-radius: 4px;
  color: var(--nord6);
  font-size: 1rem;
  height: 2.5rem;
  margin-top: 1rem;
  width: 5rem;
  &:focus {
    box-shadow: inset 0 1px 2px var(--nord1), 0 0 0 4px var(--nord2);
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const Submit = ({ isValid, isSubmitting }) => (
  <Container id="submit" type="submit" disabled={!isValid || isSubmitting}>
    Send
  </Container>
)

export default Submit
