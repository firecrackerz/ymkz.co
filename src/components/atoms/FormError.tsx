import * as React from 'react'
import styled from 'styled-components'

interface Props {
  error: boolean
  children: React.ReactChild
}

const FormError = ({ error, children }: Props) => (
  <React.Fragment>{error && <Container>{children}</Container>}</React.Fragment>
)

export default FormError

const Container = styled.div`
  font-family: 'Futura';
  font-weight: 300;
  position: absolute;
  right: 0.65rem;
  top: 44px;
`
