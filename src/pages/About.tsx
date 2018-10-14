import * as React from 'react'
import Whoami from 'src/components/organisms/Whoami'
import Profile from 'src/components/organisms/Profile'
import Skills from 'src/components/organisms/Skills'
import Social from 'src/components/organisms/Social'
import Contact from 'src/components/organisms/Contact'

const About = () => (
  <React.Fragment>
    <Whoami />
    <Profile />
    <Skills />
    <Social />
    <Contact />
  </React.Fragment>
)

export default About
