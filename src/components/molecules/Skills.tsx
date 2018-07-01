import * as React from 'react'
import Caption from 'src/components/atoms/Caption'
import Skill from 'src/components/atoms/Skill'
import styled from 'styled-components'

const Skills = () => (
  <Container>
    <Caption>Skills</Caption>
    <Row>
      <Skill>ES2018</Skill>
      <Skill>Node.js</Skill>
      <Skill>TypeScript</Skill>
      <Skill>Flowtype</Skill>
      <Skill>Babel</Skill>
      <Skill>React</Skill>
      <Skill>React Native</Skill>
      <Skill>Redux</Skill>
      <Skill>CSS in JS</Skill>
      <Skill>Webpack</Skill>
      <Skill>WebExtension</Skill>
    </Row>
  </Container>
)

export default Skills

const Container = styled.section`
  padding-bottom: 128px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`
