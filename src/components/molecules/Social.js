import React from 'react'
import styled from 'styled-components'
import Caption from '../atoms/Caption'
import Icon from '../atoms/Icon'
import github from '../../images/github.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'

const Container = styled.section`
  padding-bottom: 128px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`

const Social = () => (
  <Container>
    <Caption>SOCIAL</Caption>
    <Row>
      <Icon href="https://github.com/ymkz" image={github} />
      <Icon href="https://twitter.com/ymkzly" image={twitter} />
      <Icon href="https://facebook.com/ymkzly" image={facebook} />
    </Row>
  </Container>
)

export default Social
