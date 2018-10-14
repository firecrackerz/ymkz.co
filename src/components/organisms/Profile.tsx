import * as React from 'react'
import Section from 'src/components/templates/Section'
import Text from 'src/components/atoms/Text'

const Profile: React.SFC = () => (
  <Section>
    <Text family="futura" size="subtitle" weight="bold">
      PROFILE
    </Text>
    <div>
      <Text family="futura" size="large" weight="thin">
        I&apos;m a frontend engineer nearby UI/UX engineering.
      </Text>
      <Text family="futura" size="large" weight="thin">
        And I&apos;m a student, major in Computer Science.
      </Text>
      <Text family="futura" size="large" weight="thin">
        Studying Human-Computer Interaction with Eye-Tracking and Augmented-Reality.
      </Text>
      <Text family="futura" size="large" weight="thin">
        22y/o, based in Matsue, I like padding, building UI and FPS Game.
      </Text>
    </div>
  </Section>
)

export default Profile
