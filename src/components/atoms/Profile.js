// @flow
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Futura', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.9rem;
  padding-top: 1rem;
`

const Profile = () => (
  <Container>
    I&apos;m a front-end engineer nearby UI/UX engineering.<br />
    And I&apos;m a student, major in Computer Science.<br />
    Studying Human-Computer Interaction with Eye-Tracking.<br />
    22y/o, based in Matsue, I like padding, building UI and FPS Game.
  </Container>
)

export default Profile
