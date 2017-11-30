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
const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.85rem;
`
const Mailto = styled.a`
  color: #fefeff;
  font-weight: 900;
  text-decoration: none;
`
