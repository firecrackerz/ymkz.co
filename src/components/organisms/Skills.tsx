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
      <Text family="futura" size="large" weight="thin">
        ES2018
      </Text>
      <Text family="futura" size="large" weight="thin">
        Node.js
      </Text>
      <Text family="futura" size="large" weight="thin">
        TypeScript
      </Text>
      <Text family="futura" size="large" weight="thin">
        React
      </Text>
      <Text family="futura" size="large" weight="thin">
        React Native
      </Text>
      <Text family="futura" size="large" weight="thin">
        Redux
      </Text>
      <Text family="futura" size="large" weight="thin">
        CSS in JS
      </Text>
      <Text family="futura" size="large" weight="thin">
        Webpack
      </Text>
    </Row>
  </Section>
)

export default Skills
