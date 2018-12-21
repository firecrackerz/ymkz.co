import styled from '@emotion/styled'
import * as Formik from 'formik'
import * as React from 'react'
import { colors } from '../../constants'
import { Values } from '../../types'

interface Props {
  name: string
  label: string
  placeholder: string
  type: 'input' | 'textarea'
}

export default function Field({ name, type, label, placeholder }: Props) {
  return (
    <Formik.Field name={name}>
      {({ field }: Formik.FieldProps<Values>) => (
        <React.Fragment>
          <Label htmlFor={field.name}>{label}</Label>
          {type === 'input' ? (
            <Input id={field.name} placeholder={placeholder} {...field} />
          ) : (
            <Textarea id={field.name} placeholder={placeholder} rows={8} {...field} />
          )}
          <Formik.ErrorMessage name={field.name}>
            {(message: string) => <ErrorText>{message}</ErrorText>}
          </Formik.ErrorMessage>
        </React.Fragment>
      )}
    </Formik.Field>
  )
}

const Label = styled('label')`
  display: block;
  font-family: 'Renner*';
  font-weight: 300;
  margin-top: 0.7rem;
  margin-bottom: 0.2rem;
`

const Input = styled('input')`
  background-color: ${colors.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 1rem;
  padding: 0.6rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &::placeholder {
    color: ${colors.light};
  }
`

const Textarea = styled('textarea')`
  background-color: ${colors.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 1rem;
  padding: 0.5rem;
  resize: vertical;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &::placeholder {
    color: ${colors.light};
  }
`

const ErrorText = styled('div')`
  color: ${colors.error};
  font-size: 0.85rem;
  margin-top: 0.2rem;
`
