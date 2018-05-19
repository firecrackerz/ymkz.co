// @flow
import * as React from 'react'
import styled from 'styled-components'
import Name from '~/components/atoms/Name.js'
import Aka from '~/components/atoms/Aka.js'

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 512px;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    height: 320px;
  }
`

const Who = () => (
  <Container>
    <Name>Kaz</Name>
    <Aka>ymkz</Aka>
    <Name>Yamashita</Name>
  </Container>
)

export default Who
