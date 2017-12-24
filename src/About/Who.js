import React from 'react'
import styled from 'styled-components'

const WhoComponent = () => (
  <Container>
    <Name>Kaz</Name>
    <Aka>
      <span>ymkz</span>
    </Aka>
    <Name>Yamashita</Name>
  </Container>
)

export default WhoComponent

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 512px;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    height: 320px;
  }
`

const Name = styled.p`
  color: #3e3e4e;
  font-size: 8.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const Aka = styled.div`
  font-size: 11rem;
  font-weight: 900;
  left: 0;
  position: absolute;
  top: 142px;

  @media (max-width: 768px) {
    font-size: 5.2rem;
    top: 104px;
  }
`
