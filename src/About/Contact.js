import React from 'react'
import styled from 'styled-components'

const ContactComponent = () => (
  <Container>
    <Title>CONTACT</Title>
    <div>
      <Text>
        Contact me from SNS accounts, or <Mailto href="mailto:ymkzly@gmail.com">ymkzly@gmail.com</Mailto>
      </Text>
    </div>
  </Container>
)

export default ContactComponent

const Container = styled.div`
  padding: 64px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`
const Title = styled.div`
  color: #63637e;
  font-size: 0.85rem;
  width: 256px;
  min-width: 256px;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`
const Text = styled.p`
  line-height: 1.85rem;
  font-size: 1.15rem;
`
const Mailto = styled.a`
  color: #fefeff;
  font-weight: 900;
  text-decoration: none;
`
