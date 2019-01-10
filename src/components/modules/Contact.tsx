import * as Formik from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import Button from '../../components/elements/Button'
import Field from '../../components/elements/Field'
import { handleSubmitContact } from '../../helpers/functions'
import { Values } from '../../typings'
import Content from '../abstracts/Content'
import Title from '../elements/Title'

const initialValuesContact: Values = {
  name: '',
  email: '',
  message: ''
}

const contactValidator = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  message: Yup.string().required('Message is required')
})

export default function Contact() {
  return (
    <Content>
      <Title>CONTACT</Title>
      <Formik.Formik
        initialValues={initialValuesContact}
        validationSchema={contactValidator}
        onSubmit={handleSubmitContact}
      >
        {({ isSubmitting, isValid }: Formik.FormikProps<Values>) => (
          <Formik.Form data-netlify data-netlify-honeypot="bot-field">
            <Field name="name" type="input" label="Name" placeholder="John Doe" />
            <Field name="email" type="input" label="Email" placeholder="john.doe@example.com" />
            <Field
              name="message"
              type="textarea"
              label="Message"
              placeholder="What you want to tell me"
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Send
            </Button>
          </Formik.Form>
        )}
      </Formik.Formik>
    </Content>
  )
}
