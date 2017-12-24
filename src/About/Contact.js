import React from 'react'
import styled from 'styled-components'

const ContactComponent = () => (
  <Container>
    <Title>CONTACT</Title>
    <FormWrapper>
      <form method="post">
        <input name="bot-field" type="hidden" value="contact" />
        <div>
          <label htmlFor="name">
            <InputLabel first>Name</InputLabel>
            <Input id="name" name="name" placeholder="John Doe" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <InputLabel>Email</InputLabel>
            <Input id="email" name="email" placeholder="john@example.com" type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <InputLabel>Message</InputLabel>
            <Textarea id="message" name="message" placeholder="What you want to message" />
          </label>
        </div>
        <Submit type="submit">Send</Submit>
      </form>
    </FormWrapper>
  </Container>
)

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
`
