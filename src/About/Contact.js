import React from 'react'
import { withAlert } from 'react-alert'
import styled from 'styled-components'
import Form from './Form'

const encodePayloadToBody = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const postContactMessage = (payload, alert) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...payload })
  })
    .then(() => alert.success('Thank you for your contact'))
    .catch(() => alert.error('Unexpected error has occurred'))
}

const ContactComponent = ({ alert }) => (
  <Container>
    <Title>CONTACT</Title>
    <FormWrapper>
      <Form postContactMessage={payload => postContactMessage(payload, alert)} />
    </FormWrapper>
  </Container>
)

export default withAlert(ContactComponent)

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 64px 0;

  @media (max-width: 768px) {
    display: block;
  }
`

const Title = styled.div`
  color: #63637e;
  font-size: 0.85rem;
  min-width: 256px;
  width: 256px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`

const FormWrapper = styled.div`
  width: 100%;
`
