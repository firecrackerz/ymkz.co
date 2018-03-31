import React from 'react'
import styled from 'styled-components'
import Caption from '../atoms/Caption'
import Skill from '../atoms/Skill'

const Container = styled.section`
  padding-bottom: 128px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`

const Skills = () => (
  <Container>
    <Caption>SKILLS</Caption>
    <Row>
      <Skill>ES2018</Skill>
      <Skill>Node.js</Skill>
      <Skill>TypeScript</Skill>
      <Skill>React</Skill>
      <Skill>React Native</Skill>
      <Skill>Atomic Design</Skill>
      <Skill>Redux</Skill>
      <Skill>CSS Modules</Skill>
      <Skill>styled-components</Skill>
      <Skill>Webpack</Skill>
      <Skill>FuseBox</Skill>
      <Skill>WebExtension</Skill>
    </Row>
  </Container>
)

export default Skills
