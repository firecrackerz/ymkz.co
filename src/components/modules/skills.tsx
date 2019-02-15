import React from 'react'
import Content from '../abstracts/content'
import Row from '../abstracts/row'
import Text from '../elements/text'
import Title from '../elements/title'

export default function Skills() {
  return (
    <Content>
      <Title>SKILLS</Title>
      <Row space={32}>
        <Text>HTML5</Text>
        <Text>CSS3</Text>
        <Text>ES2018</Text>
        <Text>Node.js</Text>
        <Text>TypeScript</Text>
        <Text>React</Text>
        <Text>React Native</Text>
        <Text>Redux</Text>
        <Text>Webpack</Text>
        <Text>Git</Text>
      </Row>
    </Content>
  )
}
