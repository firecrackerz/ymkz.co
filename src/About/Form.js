import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import Yup from 'yup'

const FormComponent = ({ values, touched, errors, isValid, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
  <form data-netlify="true" data-netlify-honeypot="bot-field" method="post" name="contact" onSubmit={handleSubmit}>
    <input name="bot-field" type="hidden" value="contact" />
    <div>
      <label htmlFor="name">
        <InputLabel first>Name</InputLabel>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          type="text"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && touched.name && <Invalid>{errors.name}</Invalid>}
      </label>
    </div>
    <div>
      <label htmlFor="email">
        <InputLabel>Email</InputLabel>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && <Invalid>{errors.email}</Invalid>}
      </label>
    </div>
    <div>
      <label htmlFor="message">
        <InputLabel>Message</InputLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="What you want to message"
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.message && touched.message && <Invalid>{errors.message}</Invalid>}
      </label>
    </div>
    <Submit type="submit" disabled={!isValid || isSubmitting}>
      Send
    </Submit>
  </form>
)

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Name is required')
  }),
  handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
    await props.postContactMessage(values)
    setSubmitting(false)
    resetForm()
  }
})(FormComponent)

const InputLabel = styled.p`
  font-size: 1.1rem;
  padding: 0.8rem 0;
  padding-top: ${({ first }) => first && 0};
`

const Input = styled.input`
  background-color: #3e3e4e;
  border-radius: 4px;
  color: #fefeff;
  font-size: 1.1rem;
  max-width: 640px;
  padding: 0.65rem;
  width: 100%;

  &:focus {
    border-color: #373747;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(77, 77, 96, 0.3);
    outline: none;
  }
`

const Textarea = styled.textarea`
  background-color: #3e3e4e;
  border-radius: 4px;
  color: #fefeff;
  font-size: 1.1rem;
  height: 12rem;
  max-width: 640px;
  padding: 0.65rem;
  resize: none;
  width: 100%;

  &:focus {
    border-color: #373747;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(77, 77, 96, 0.3);
    outline: none;
  }
`

const Invalid = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem 0;
  text-align: right;
`

const Submit = styled.button`
  background-color: #3e3e4e;
  border: 0;
  border-radius: 4px;
  color: #fefeff;
  font-size: 1rem;
  height: 2.5rem;
  margin-top: 1rem;
  width: 5rem;

  &:focus {
    border-color: #373747;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2rem rgba(77, 77, 96, 0.3);
    outline: none;
  }

  &:active {
    border-color: #373747;
    box-shadow: inset 0 0.5rem 0.5rem rgba(27, 31, 35, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
