import styled from '@emotion/styled'
import { ErrorMessage, Field, FieldProps, Form, Formik, FormikActions, FormikProps } from 'formik'
import * as React from 'react'
import Row from 'src/components/Row'
import { colors } from 'src/helpers/constants'
import facebook from 'src/images/icon_facebook.svg'
import github from 'src/images/icon_github.svg'
import twitter from 'src/images/icon_twitter.svg'
import * as Yup from 'yup'

interface Values {
  name: string
  email: string
  message: string
}

interface Payload extends Values {
  [key: string]: string
  'form-name': 'contact'
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

function encodePayloadToBody(data: Payload) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialValues: Values = {
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

const Container = styled('div')`
  margin: 0 auto;
  max-width: 768px;
  padding: 96px 16px;
  @media (max-width: 767px) {
    padding: 64px 16px;
  }
`

const Content = styled('div')`
  padding: 96px 0;
  @media (max-width: 767px) {
    padding: 64px 0;
  }
`

const Title = styled('div')`
  font-family: Futura;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

const Text = styled('div')`
  font-family: Futura;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
`

const Link = styled('a')`
  color: ${colors.white};
  height: 48px;
  width: 48px;
`

const Icon = styled('img')`
  height: 48px;
  width: 48px;
`

const Label = styled('label')`
  display: block;
  font-family: Futura;
  font-weight: 300;
  margin-top: 0.6rem;
  margin-bottom: 0.2rem;
`

const Input = styled('input')`
  background-color: ${colors.black.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white.default};
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.black.dark}, 0 0 0 4px ${colors.black.middle};
    outline: none;
  }
  &::placeholder {
    color: ${colors.black.light};
  }
`

const Textarea = styled('textarea')`
  background-color: ${colors.black.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white.default};
  font-size: 1rem;
  padding: 0.5rem;
  resize: vertical;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.black.dark}, 0 0 0 4px ${colors.black.middle};
    outline: none;
  }
  &::placeholder {
    color: ${colors.black.light};
  }
`

const ErrorText = styled('div')`
  font-size: 0.85rem;
  margin-top: 0.2rem;
`

const Button = styled('button')`
  background-color: ${colors.black.dark};
  border: 0;
  border-radius: 4px;
  color: ${colors.white.default};
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  -webkit-appearance: button;
  &:focus {
    box-shadow: inset 0 1px 2px ${colors.black.dark}, 0 0 0 4px ${colors.black.middle};
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export default function About() {
  return (
    <Container>
      <Content>
        <Title>PROFILE</Title>
        <Text>I&apos;m Kazuya Yamashita a.k.a ymkz.</Text>
        <Text>Work as a Frontend engineer nearby UI/UX engineering.</Text>
        <Text>
          Majored in computer science, studying Human-Computer Interaction with face/eye-tracking.
        </Text>
        <Text>22y/o, based in Matsue, I like padding, building UI and FPS Game.</Text>
      </Content>
      <Content>
        <Title>SKILLS</Title>
        <Row space={32}>
          <Text>HTML5</Text>
          <Text>CSS3</Text>
          <Text>ES2018</Text>
          <Text>Node.js</Text>
          <Text>TypeScript</Text>
          <Text>React</Text>
          <Text>React Native</Text>
          <Text>Redux</Text>
          <Text>Webpack</Text>
        </Row>
      </Content>
      <Content>
        <Title>SOCIAL</Title>
        <Row space={24}>
          <Link href="https://twitter.com/ymkzly" rel="noopener noreferrer" target="_blank">
            <Icon src={twitter} alt="Link to Twitter" />
          </Link>
          <Link href="https://facebook.com/ymkzly" rel="noopener noreferrer" target="_blank">
            <Icon src={facebook} alt="Link to Facebook" />
          </Link>
          <Link href="https://github.com/ymkz" rel="noopener noreferrer" target="_blank">
            <Icon src={github} alt="Link to GitHub" />
          </Link>
        </Row>
      </Content>
      <Content>
        <Title>CONTACT</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={contactValidator}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }: FormikProps<Values>) => (
            <Form data-netlify data-netlify-honeypot="bot-field">
              <Field name="name">
                {({ field }: FieldProps<Values>) => (
                  <React.Fragment>
                    <Label htmlFor={field.name}>Name</Label>
                    <Input id={field.name} placeholder="John Doe" {...field} />
                    <ErrorMessage name={field.name}>
                      {(message: string) => <ErrorText>{message}</ErrorText>}
                    </ErrorMessage>
                  </React.Fragment>
                )}
              </Field>
              <Field name="email">
                {({ field }: FieldProps<Values>) => (
                  <React.Fragment>
                    <Label htmlFor={field.name}>Email</Label>
                    <Input id={field.name} placeholder="john.doe@example.com" {...field} />
                    <ErrorMessage name={field.name}>
                      {(message: string) => <ErrorText>{message}</ErrorText>}
                    </ErrorMessage>
                  </React.Fragment>
                )}
              </Field>
              <Field name="message">
                {({ field }: FieldProps<Values>) => (
                  <React.Fragment>
                    <Label htmlFor={field.name}>Message</Label>
                    <Textarea
                      id={field.name}
                      placeholder="What you want to tell me"
                      rows={8}
                      {...field}
                    />
                    <ErrorMessage name={field.name}>
                      {(message: string) => <ErrorText>{message}</ErrorText>}
                    </ErrorMessage>
                  </React.Fragment>
                )}
              </Field>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
