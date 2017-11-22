import React from 'react'
import styled from 'styled-components'
import Who from './Who'
import About from './About'
import Skills from './Skills'
import Social from './Social'
import Contact from './Contact'

const AboutContainer = () => (
  <Container>
    <Who />
    <About />
    <Skills />
    <Social />
    <Contact />
  </Container>
)

export default AboutContainer

const Container = styled.div`
  padding-bottom: 128px;
`
