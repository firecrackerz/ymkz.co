import React from 'react'
import styled from 'styled-components'

const WhoComponent = () => (
  <Container>
    <Name>Kaz</Name>
    <Aka>ymkz</Aka>
    <Name>Yamashita</Name>
  </Container>
)

export default WhoComponent

const Container = styled.div`
  height: 512px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    height: 320px;
  }
`
const Name = styled.div`
  font-size: 8.5rem;
  color: #3e3e4e;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`
const Aka = styled.div`
  font-size: 11rem;
  font-weight: 900;
  position: absolute;
  top: 142px;
  left: 0;
  @media (max-width: 768px) {
    font-size: 5.2rem;
    top: 104px;
  }
`
