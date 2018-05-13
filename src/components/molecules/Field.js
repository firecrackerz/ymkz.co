// @flow
import * as React from 'react'
import styled from 'styled-components'
import Error from '~/components/atoms/Error'
import Label from '~/components/atoms/Label'
import Input from '~/components/atoms/Input'

const Container = styled.div`
  position: relative;
`

const Field = ({
  type,
  label,
  name,
  placeholder,
  value,
  error,
  touched,
  handleBlur,
  handleChange
}: {
  type: 'input' | 'textarea',
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
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />
    {error && touched && <Error>{error}</Error>}
  </Container>
)

export default Field
