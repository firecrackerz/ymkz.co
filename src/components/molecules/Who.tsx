import * as React from 'react'
import Aka from 'src/components/atoms/Aka'
import Name from 'src/components/atoms/Name'
import styled from 'styled-components'

const Who = () => (
  <Container>
    <Name>Kaz</Name>
    <Aka>ymkz</Aka>
    <Name>Yamashita</Name>
  </Container>
)

export default Who

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
