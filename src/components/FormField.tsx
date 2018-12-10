import styled from '@emotion/styled'
import { ErrorMessage, Field, FieldProps } from 'formik'
import * as React from 'react'
import { Values } from 'src/types/interface'

interface Props {
  name: string
  label: string
  placeholder: string
  type: 'input' | 'textarea'
}

export default function FormField({ name, type, label, placeholder }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps<Values>) => (
        <>
          <Label htmlFor={field.name}>{label}</Label>
          {type === 'input' ? (
            <Input id={field.name} placeholder={placeholder} {...field} />
          ) : (
            <Textarea id={field.name} placeholder={placeholder} rows={8} {...field} />
          )}
          <ErrorMessage name={field.name}>
            {(message: string) => <ErrorText>{message}</ErrorText>}
          </ErrorMessage>
        </>
      )}
    </Field>
  )
}

const Label = styled('label')`
  display: block;
  font-family: 'Renner*';
  font-weight: 300;
  margin-top: 0.6rem;
  margin-bottom: 0.2rem;
`

const Input = styled('input')`
  background-color: #3b4252;
  border: 0;
  border-radius: 4px;
  color: #eceff4;
  font-size: 1rem;
  padding: 0.6rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &::placeholder {
    color: #4c566a;
  }
`

const Textarea = styled('textarea')`
  background-color: #3b4252;
  border: 0;
  border-radius: 4px;
  color: #eceff4;
  font-size: 1rem;
  padding: 0.5rem;
  resize: vertical;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px #3b4252, 0 0 0 4px #434c5e;
    outline: none;
  }
  &::placeholder {
    color: #4c566a;
  }
`

const ErrorText = styled('div')`
  font-size: 0.85rem;
  margin-top: 0.2rem;
`
