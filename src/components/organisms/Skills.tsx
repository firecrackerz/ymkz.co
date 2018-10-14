import * as React from 'react'
import Row from 'src/components/templates/Row'
import Section from 'src/components/templates/Section'
import Text from 'src/components/atoms/Text'

const Skills: React.SFC = () => (
  <Section>
    <Text family="futura" size="subtitle" weight="bold">
      SKILLS
    </Text>
    <Row space={32}>
      <Text family="futura" size="large">
        ES2018
      </Text>
      <Text family="futura" size="large">
        Node.js
      </Text>
      <Text family="futura" size="large">
        TypeScript
      </Text>
      <Text family="futura" size="large">
        React
      </Text>
      <Text family="futura" size="large">
        React Native
      </Text>
      <Text family="futura" size="large">
        Redux
      </Text>
      <Text family="futura" size="large">
        CSS in JS
      </Text>
      <Text family="futura" size="large">
        Webpack
      </Text>
    </Row>
  </Section>
)

export default Skills
