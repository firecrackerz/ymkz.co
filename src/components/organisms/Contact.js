import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import Yup from 'yup'
import Caption from '../atoms/Caption'
import Submit from '../atoms/Submit'
import FormInput from '../molecules/FormInput'
import FormText from '../molecules/FormText'

const Container = styled.section`
  max-width: var(--contact-max-width);
`

const encodePayloadToBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const postContactMessage = async payload => {
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...payload })
  }
  await fetch('/', option).catch(() => alert('Unexpected error has occurred'))
  alert('Thank you for your contact')
}

const Contact = ({
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <Container>
    <Caption>CONTACT</Caption>
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="Name"
        name="name"
        placeholder="John Doe"
        value={values.name}
        error={errors.name}
        touched={touched.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        placeholder="john@example.com"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <FormText
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
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    await postContactMessage(values)
    setSubmitting(false)
    resetForm()
  }
})(Contact)
