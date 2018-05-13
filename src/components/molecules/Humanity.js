// @flow
import * as React from 'react'
import styled from 'styled-components'
import Caption from '~/components/atoms/Caption.js'
import Profile from '~/components/atoms/Profile.js'

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
