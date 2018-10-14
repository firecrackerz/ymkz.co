import * as React from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Formik, Field, Form, FormikProps, FormikActions, FieldProps } from 'formik'
import styled from 'styled-components'
import Section from 'src/components/templates/Section'
import Text from 'src/components/atoms/Text'
import Label from 'src/components/atoms/Label'
import Input from 'src/components/atoms/Input'
import Textarea from 'src/components/atoms/Textarea'
import Button from 'src/components/atoms/Button'

interface Values {
  name: string
  email: string
  message: string
}

interface Payload extends Values {
  [key: string]: string
  'form-name': 'contact'
}

function encodePayloadToBody(data: Payload) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function handleSubmit(values: Values, actions: FormikActions<Values>) {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...values })
  }

  fetch('/', request)
    .then(() => {
      alert('Thank you for your contact')
      actions.resetForm()
      actions.setSubmitting(false)
    })
    .catch(error => {
      alert('Unexpected error has occurred')
      console.error(error)
    })
}

const contactValidator = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  message: Yup.string().required('Message is required')
})

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

const Contact = () => (
  <Section>
    <Text family="futura" size="subtitle" weight="bold">
      CONTACT
    </Text>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={contactValidator}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }: FormikProps<Values>) => (
        <Form data-netlify data-netlify-honeypot="bot-field">
          <Field name="name">
            {({ field }: FieldProps<Values>) => (
              <FieldContainer>
                <Label htmlFor={field.name}>Name</Label>
                <Input id={field.name} placeholder="John Doe" {...field} />
                <ErrorMessage
                  name={field.name}
                  render={(message: string) => <Text>{message}</Text>}
                />
              </FieldContainer>
            )}
          </Field>
          <Field name="email">
            {({ field }: FieldProps<Values>) => (
              <FieldContainer>
                <Label htmlFor={field.name}>E-mail</Label>
                <Input id={field.name} placeholder="john.doe@example.com" {...field} />
                <ErrorMessage
                  name={field.name}
                  render={(message: string) => <Text>{message}</Text>}
                />
              </FieldContainer>
            )}
          </Field>
          <Field name="message">
            {({ field }: FieldProps<Values>) => (
              <FieldContainer>
                <Label htmlFor={field.name}>Message</Label>
                <Textarea
                  id={field.name}
                  placeholder="What you want to message"
                  rows={8}
                  {...field}
                />
                <ErrorMessage
                  name={field.name}
                  render={(message: string) => <Text>{message}</Text>}
                />
              </FieldContainer>
            )}
          </Field>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  </Section>
)

export default Contact
