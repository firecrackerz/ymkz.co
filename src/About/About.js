import React from 'react'
import styled from 'styled-components'

const AboutComponent = () => (
  <Container>
    <Title>ABOUT</Title>
    <div>
      <Text>I&apos;m a front-end engineer nearby UI/UX engineering.</Text>
      <Text>And I&apos;m a student, major in Information Technology.</Text>
      <Text>Researching Human-Computer Interaction with Eye-Tracking.</Text>
      <Text>21y/o, based in Matsue, I like padding, building UI and FPS Game.</Text>
    </div>
  </Container>
)

export default AboutComponent

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
