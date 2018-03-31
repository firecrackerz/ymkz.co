import React from 'react'
import styled from 'styled-components'
import Caption from '../atoms/Caption'
import Profile from '../atoms/Profile'

const Container = styled.section`
  padding-bottom: 128px;
`

const Humanity = () => (
  <Container>
    <Caption>ABOUT</Caption>
    <Profile />
  </Container>
)

export default Humanity
