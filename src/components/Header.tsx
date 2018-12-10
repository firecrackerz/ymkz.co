import styled from '@emotion/styled'
import * as React from 'react'
import Navlink from 'src/components/Navlink'
import Row from 'src/components/Row'

export default function Header() {
  return (
    <Container>
      <Flex>
        <Logo src="/images/logo.svg" alt="logo" />
        <Navlink to="/">ymkz</Navlink>
        <Role>is frontend engineer</Role>
      </Flex>
      <Row space={24}>
        <Navlink to="/about">about</Navlink>
        <Navlink to="/work">work</Navlink>
      </Row>
    </Container>
  )
}

const Container = styled('header')`
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: space-between;
  padding: 0 48px;
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const Flex = styled('div')`
  align-items: center;
  display: flex;
`

const Logo = styled('img')`
  margin-right: 24px;
  @media (max-width: 767px) {
    margin-right: 16px;
  }
`

const Role = styled('div')`
  font-family: 'Renner*';
  margin-left: 0.3rem;
  font-weight: 300;
  @media (max-width: 767px) {
    display: none;
  }
`
