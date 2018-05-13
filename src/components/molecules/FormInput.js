// @flow
import * as React from 'react'
import styled from 'styled-components'
import Error from '~/components/atoms/Error.js'
import Label from '~/components/atoms/Label.js'
import TextInput from '~/components/atoms/TextInput.js'

const Container = styled.div`
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
}: {
  label: string,
  name: string,
  placeholder: string,
  value: string,
  error: ?string,
  touched: boolean,
  handleBlur: Function,
  handleChange: Function
}) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
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
