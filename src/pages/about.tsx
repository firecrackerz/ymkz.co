import React from 'react'
import Layout from '../components/abstracts/layout'
import Container from '../components/abstracts/container'
import Profile from '../components/modules/profile'
import Skills from '../components/modules/skills'
import Social from '../components/modules/social'
// import Contact from '../components/modules/contact'

export default function About() {
  return (
    <Layout>
      <Container>
        <Profile />
        <Skills />
        <Social />
        {/* <Contact /> */}
      </Container>
    </Layout>
  )
}
