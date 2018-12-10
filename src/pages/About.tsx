import styled from '@emotion/styled'
import { Form, Formik, FormikProps } from 'formik'
import * as React from 'react'
import FormButton from 'src/components/FormButton'
import FormField from 'src/components/FormField'
import LinkIcon from 'src/components/LinkIcon'
import Row from 'src/components/Row'
import { handleSubmit } from 'src/helpers/functions'
import { Values } from 'src/types/interface'
import * as Yup from 'yup'

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
          <LinkIcon src="/images/icon_github.svg" href="https://github.com/ymkz" />
          <LinkIcon src="/images/icon_twitter.svg" href="https://twitter.com/ymkzly" />
          <LinkIcon src="/images/icon_facebook.svg" href="https://facebook.com/ymkzly" />
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
              <FormField name="name" type="input" label="Name" placeholder="John Doe" />
              <FormField
                name="email"
                type="input"
                label="Email"
                placeholder="john.doe@example.com"
              />
              <FormField
                name="message"
                type="textarea"
                label="Message"
                placeholder="What you want to tell me"
              />
              <FormButton type="submit" disabled={!isValid || isSubmitting}>
                Send
              </FormButton>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}

const Container = styled('div')`
  margin: 0 auto;
  max-width: 768px;
  padding: 96px 16px;
  @media (max-width: 1024px) {
    padding: 64px 16px;
  }
`

const Content = styled('div')`
  padding: 96px 0;
  @media (max-width: 1024px) {
    padding: 64px 0;
  }
`

const Title = styled('div')`
  font-family: 'Renner*';
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

const Text = styled('div')`
  font-family: 'Renner*';
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
`
