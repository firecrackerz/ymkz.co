import * as React from 'react'
import Caption from 'src/components/atoms/Caption'
import Intro from 'src/components/atoms/Intro'
import styled from 'styled-components'

const Profile = () => (
  <Container>
    <Caption>Profile</Caption>
    <Intro>
      <React.Fragment>
        I&apos;m a front-end engineer nearby UI/UX engineering.<br />
        And I&apos;m a student, major in Computer Science.<br />
        Studying Human-Computer Interaction with Eye-Tracking and
        Augmented-Reality.<br />
        22y/o, based in Matsue, I like padding, building UI and FPS Game.<br />
      </React.Fragment>
    </Intro>
  </Container>
)

export default Profile

const Container = styled.section`
  padding-bottom: 128px;
`
