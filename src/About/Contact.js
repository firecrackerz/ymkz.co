import React from 'react'
import AlertContainer from 'react-alert'
import styled from 'styled-components'
import SuccessIcon from './images/sucess.svg'
import ErrorIcon from './images/error.svg'
import Form from './Form'

const alertOptions = {
  offset: 16,
  position: 'bottom right',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
}

class ContactComponent extends React.PureComponent {
  encodePayloadToBody = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')

  postContactMessage = payload => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encodePayloadToBody({ 'form-name': 'contact', ...payload })
    })
      .then(() => this.showAlert({ message: 'Thank you for your contact', type: 'success' }))
      .catch(() => this.showAlert({ message: 'Unexpected error has occurred', type: 'error' }))
  }

  showAlert = ({ message, type }) => {
    this.alert.show(message, {
      type: type,
      icon: <AlertIcon src={type === 'success' ? SuccessIcon : ErrorIcon} alt="Alert icon" />
    })
  }

  render() {
    return (
      <Container>
        <AlertContainer ref={alert => (this.alert = alert)} {...alertOptions} />
        <Title>CONTACT</Title>
        <FormWrapper>
          <Form postContactMessage={this.postContactMessage} />
        </FormWrapper>
      </Container>
    )
  }
}

export default ContactComponent

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 64px 0;

  @media (max-width: 768px) {
    display: block;
  }
`

const AlertIcon = styled.img`
  height: 50px;
  padding: 0.5rem 0 0.5rem 0.5rem;
  width: 50px;
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
