import React from 'react'
import styled from 'styled-components'

const SkillsComponent = () => (
  <Container>
    <Title>SKILLS</Title>
    <Skills>
      <Skill first>ES7</Skill>
      <Skill>React</Skill>
      <Skill>Redux</Skill>
      <Skill>CSS Modules</Skill>
      <Skill>styled-components</Skill>
      <Skill>Webpack</Skill>
      <Skill>FuseBox</Skill>
      <Skill>React Native</Skill>
      <Skill last>WebExtension</Skill>
    </Skills>
  </Container>
)

export default SkillsComponent

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

const Skills = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Skill = styled.span`
  display: block;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  padding-right: ${({ last }) => (last ? 0 : '2rem')};
`
