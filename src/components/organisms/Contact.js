// @flow
import * as React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import type { FormikProps, FormikActions } from 'formik'
import Yup from 'yup'
import { constraint } from '~/constants'
import Caption from '~/components/atoms/Caption'
import Submit from '~/components/atoms/Submit'
import Field from '~/components/molecules/Field'
import type { ContactBody, ContactPayload } from '~/types'

const encodePayloadToBody = (data: ContactBody) =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const postContactMessage = async (payload: ContactPayload) => {
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...payload })
  }
  await fetch('/', option).catch(() => alert('Unexpected error has occurred'))
  alert('Thank you for your contact')
}

const Container = styled.section`
  max-width: ${constraint.contactWidthMax};
`

const Contact = ({
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}: FormikProps<ContactPayload>) => (
  <Container>
    <Caption>CONTACT</Caption>
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      onSubmit={handleSubmit}
    >
      <Field
        type="input"
        label="Name"
        name="name"
        placeholder="John Doe"
        value={values.name}
        error={errors.name}
        touched={touched.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Field
        type="input"
        label="Email"
        name="email"
        placeholder="john@example.com"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Field
        type="textarea"
        label="Message"
        name="message"
        placeholder="What you want to message"
        value={values.message}
        error={errors.message}
        touched={touched.message}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Submit isValid={isValid} isSubmitting={isSubmitting} />
    </form>
  </Container>
)

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Message is required')
  }),
  handleSubmit: async (
    values: ContactPayload,
    { setSubmitting, resetForm }: FormikActions<ContactPayload>
  ) => {
    await postContactMessage(values)
    setSubmitting(false)
    resetForm()
  }
})(Contact)
