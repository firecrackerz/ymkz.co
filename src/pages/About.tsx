import * as React from 'react'
import Container from '../components/abstracts/Container'
import Contact from '../components/modules/Contact'
import Profile from '../components/modules/Profile'
import Skills from '../components/modules/Skills'
import Social from '../components/modules/Social'

export default function About() {
  return (
    <Container>
      <Profile />
      <Skills />
      <Social />
      <Contact />
    </Container>
  )
}
