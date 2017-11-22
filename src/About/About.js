import React from 'react'
import styled from 'styled-components'

const AboutComponent = () => (
  <Container>
    <Title>ABOUT</Title>
    <div>
      <Text>I&apos;m a front-end engineer nearby UI/UX engineering.</Text>
      <Text>And I&apos;m a student, major in Information Technology.</Text>
      <Text>Researching Human-Computer Interaction with Eye-Tracking.</Text>
    </div>
  </Container>
)

export default AboutComponent

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
