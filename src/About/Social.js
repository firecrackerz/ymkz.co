import React from 'react'
import styled from 'styled-components'
import GitHub from './images/github.svg'
import Twitter from './images/twitter.svg'
import Facebook from './images/facebook.svg'

const SocialComponent = () => (
  <Container>
    <Title>SOCIAL</Title>
    <Link href="https://github.com/ymkz" first>
      <Icon src={GitHub} />
    </Link>
    <Link href="https://twitter.com/ymkzly">
      <Icon src={Twitter} />
    </Link>
    <Link href="https://facebook.com/ymkzly" last>
      <Icon src={Facebook} />
    </Link>
  </Container>
)

export default SocialComponent

const Container = styled.div`
  padding: 64px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`
const Title = styled.div`
  color: #63637e;
  font-size: 0.85rem;
  width: 256px;
  min-width: 256px;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`
const Icon = styled.img`
  width: 32px;
  height: 32px;
`
const Link = styled.a.attrs({
  target: '_blank'
})`
  text-decoration: none;
  padding: 0 16px;
  padding-right: ${({ last }) => last && 0};
  padding-left: ${({ first }) => first && 0};
`
