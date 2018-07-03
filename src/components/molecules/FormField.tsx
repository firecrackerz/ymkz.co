import { Field, FieldProps } from 'formik'
import * as React from 'react'
import FormError from 'src/components/atoms/FormError'
import FormInput from 'src/components/atoms/FormInput'
import FormLabel from 'src/components/atoms/FormLabel'
import { Values } from 'src/components/organisms/Contact'
import styled from 'styled-components'

interface Props {
  label: string
  type: 'input' | 'textarea'
  name: string
  placeholder: string
}

const FormField = ({ label, type, name, placeholder }: Props) => (
  <Container>
    <Field
      name={name}
      render={({ field, form }: FieldProps<Values>) => (
        <React.Fragment>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormInput type={type} id={name} placeholder={placeholder} {...field} />
          <FormError error={form.errors[name] && form.touched[name]}>{form.errors[name]}</FormError>
        </React.Fragment>
      )}
    />
  </Container>
)

export default FormField

const Container = styled.div`
  position: relative;
`
