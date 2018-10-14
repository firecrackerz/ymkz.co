import * as React from 'react'
import styled from 'styled-components'
import { colors } from 'src/helpers/constants'
import Section from 'src/components/templates/Section'

const Whoami: React.SFC = () => (
  <Container>
    <Name>Kaz</Name>
    <Aka>ymkz</Aka>
    <Name>yamashita</Name>
  </Container>
)

export default Whoami

const Container = styled(Section)`
  position: relative;
`

const Aka = styled.div`
  color: ${colors.white};
  font-family: Futura;
  font-size: 10rem;
  font-weight: 700;
  left: 0;
  position: absolute;
  top: 66px;
  @media (max-width: 767px) {
    font-size: 4.5rem;
    top: 36px;
  }
`

const Name = styled.div`
  color: ${colors.black.light};
  font-family: Futura;
  font-size: 7.5rem;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 3.6rem;
  }
`
