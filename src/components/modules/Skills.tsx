import * as React from 'react'
import Content from '../abstracts/Content'
import Row from '../abstracts/Row'
import Text from '../elements/Text'
import Title from '../elements/Title'

export default function Profile() {
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
      </Row>
    </Content>
  )
}
