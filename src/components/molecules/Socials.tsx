import * as React from 'react'
import Caption from 'src/components/atoms/Caption'
import IconFacebook from 'src/components/atoms/IconFacebook'
import IconGithub from 'src/components/atoms/IconGithub'
import IconTwitter from 'src/components/atoms/IconTwitter'
import styled from 'styled-components'

const Socials = () => (
  <Container>
    <Caption>Social</Caption>
    <Row>
      <IconTwitter />
      <IconFacebook />
      <IconGithub />
    </Row>
  </Container>
)

export default Socials

const Container = styled.section`
  padding-bottom: 128px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`
