// @flow
import * as React from 'react'
import styled from 'styled-components'
import Error from '~/components/atoms/Error.js'
import Label from '~/components/atoms/Label.js'
import TextArea from '~/components/atoms/TextArea.js'

const Container = styled.div`
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
