import React from 'react'
import styled from 'styled-components'
import GitHub from './images/github.svg'
import Twitter from './images/twitter.svg'
import Facebook from './images/facebook.svg'

const SocialComponent = () => (
  <Container>
    <Title>SOCIAL</Title>
    <Link href="https://github.com/ymkz" first>
      <Icon src={GitHub} alt="GitHub" />
    </Link>
    <Link href="https://twitter.com/ymkzly">
      <Icon src={Twitter} alt="Twitter" />
    </Link>
    <Link href="https://facebook.com/ymkzly" last>
      <Icon src={Facebook} alt="Facebook" />
    </Link>
  </Container>
)

export default SocialComponent

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 64px 0;

  @media (max-width: 768px) {
    display: block;
  }
`

const Title = styled.div`
  color: #63637e;
  font-size: 0.85rem;
  min-width: 256px;
  width: 256px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`

const Icon = styled.img`
  height: 32px;
  width: 32px;
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  padding: 0 16px;
  padding-left: ${({ first }) => first && 0};
  padding-right: ${({ last }) => last && 0};
  text-decoration: none;
`
