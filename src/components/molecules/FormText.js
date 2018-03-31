import React from 'react'
import styled from 'styled-components'
import Error from '../atoms/Error'
import Label from '../atoms/Label'
import TextArea from '../atoms/TextArea'

const Container = styled.label`
  display: block;
  position: relative;
`

const FormText = ({
  label,
  name,
  placeholder,
  value,
  error,
  touched,
  handleBlur,
  handleChange
}) => (
  <Container htmlFor={name}>
    <Label>{label}</Label>
    <TextArea
      name={name}
      placeholder={placeholder}
      value={value}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />
    {error && touched && <Error>{error}</Error>}
  </Container>
)

export default FormText
