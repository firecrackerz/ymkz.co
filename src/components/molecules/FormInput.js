import React from 'react'
import styled from 'styled-components'
import Error from '../atoms/Error'
import Label from '../atoms/Label'
import TextInput from '../atoms/TextInput'

const Container = styled.label`
  display: block;
  position: relative;
`

const FormInput = ({
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
    <TextInput
      name={name}
      placeholder={placeholder}
      value={value}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />
    {error && touched && <Error>{error}</Error>}
  </Container>
)

export default FormInput
