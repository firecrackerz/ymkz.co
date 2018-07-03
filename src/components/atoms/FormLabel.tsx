import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactChild
}

const FormLabel = ({ children, ...attributes }: Props) => <Container {...attributes}>{children}</Container>

export default FormLabel

const Container = styled.label`
  display: block;
  font-family: 'Futura';
  font-weight: 300;
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem;
`
