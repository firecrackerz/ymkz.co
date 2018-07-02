import { Form, Formik, FormikProps } from 'formik'
import * as React from 'react'
import Caption from 'src/components/atoms/Caption'
import FormSubmit from 'src/components/atoms/FormSubmit'
import FormField from 'src/components/molecules/FormField'
import styled from 'styled-components'
import * as Yup from 'yup'

export interface Values {
  name: string
  email: string
  message: string
}

interface Payload extends Values {
  'form-name': 'contact'
}

function encodePayloadToBody(data: Payload) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function handleSubmit(values: Values, actions: FormikProps<Values>) {
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...values })
  }
  fetch('/', payload)
    .then(() => {
      alert('Thank you for your contact')
      actions.resetForm()
    })
    .catch(err => {
      alert('Unexpected error has occurred')
      console.error(err)
    })
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required')
})

const Contact = () => (
  <Container>
    <Caption>CONTACT</Caption>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      render={({ isSubmitting, isValid }: FormikProps<Values>) => (
        <Form data-netlify data-netlify-honeypot="bot-field">
          <FormField
            label="Name"
            type="input"
            name="name"
            placeholder="John Doe"
          />
          <FormField
            label="E-mail"
            type="input"
            name="email"
            placeholder="john.doe@example.com"
          />
          <FormField
            label="Message"
            type="textarea"
            name="message"
            placeholder="What you want to message"
          />
          <FormSubmit isSubmitting={isSubmitting} isValid={isValid} />
        </Form>
      )}
    />
  </Container>
)

export default Contact

const Container = styled.section`
  padding-bottom: 128px;
`
