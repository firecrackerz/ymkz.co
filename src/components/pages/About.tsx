import * as React from 'react'
import Profile from 'src/components/molecules/Profile'
import Skills from 'src/components/molecules/Skills'
import Socials from 'src/components/molecules/Socials'
import Who from 'src/components/molecules/Who'
import Contact from 'src/components/organisms/Contact'

const About = () => (
  <React.Fragment>
    <Who />
    <Profile />
    <Skills />
    <Socials />
    <Contact />
  </React.Fragment>
)

export default About
