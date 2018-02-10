import React from 'react'
import styled from 'styled-components'

const SkillsComponent = () => (
  <Container>
    <Title>SKILLS</Title>
    <SkillSet>
      <Skill first>ES2017</Skill>
      <Skill>React</Skill>
      <Skill>React Native</Skill>
      <Skill>Redux</Skill>
      <Skill>CSS Modules</Skill>
      <Skill>styled-components</Skill>
      <Skill>Webpack</Skill>
      <Skill>FuseBox</Skill>
      <Skill last>WebExtension</Skill>
    </SkillSet>
  </Container>
)

export default SkillsComponent

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  padding: 64px 0;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Title = styled.div`
  color: #63637e;
  font-size: 0.85rem;
  min-width: 256px;
  width: 256px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`

export const SkillSet = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Skill = styled.span`
  display: block;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  padding-right: ${({ last }) => (last ? 0 : '2rem')};
`
