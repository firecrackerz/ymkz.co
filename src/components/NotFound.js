import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../constants'

const About = () => (
  <Container>
    <Section>
      <Text>404</Text>
      <Text>Not Found</Text>
    </Section>
  </Container>
)

export default About

const Container = styled.div`
  width: 100%;
`
const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${sizes.headerHeight});
`
const Text = styled.div`
  font-size: 3em;
  color: ${colors.ashesGrey};
`
