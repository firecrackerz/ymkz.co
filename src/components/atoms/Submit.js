// @flow
import * as React from 'react'
import styled from 'styled-components'
import { color } from '~/constants'

const Container = styled.button`
  background-color: ${color.darkBlack};
  border: 0;
  border-radius: 4px;
  color: ${color.white};
  font-size: 1rem;
  height: 2.5rem;
  margin-top: 1rem;
  width: 5rem;
  &:focus {
    box-shadow: inset 0 1px 2px ${color.darkBlack},
      0 0 0 4px ${color.middleBlack};
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const Submit = ({
  isValid,
  isSubmitting
}: {
  isValid: boolean,
  isSubmitting: boolean
}) => (
  <Container id="submit" type="submit" disabled={!isValid || isSubmitting}>
    Send
  </Container>
)

export default Submit
