import * as React from 'react'
import Row from 'src/components/templates/Row'
import Section from 'src/components/templates/Section'
import Text from 'src/components/atoms/Text'
import Link from 'src/components/atoms/Link'
import Icon from 'src/components/atoms/Icon'
import github from 'src/images/github.svg'
import twitter from 'src/images/twitter.svg'
import facebook from 'src/images/facebook.svg'

const Social: React.SFC = () => (
  <Section>
    <Text family="futura" weight="bold" size="subtitle">
      SOCIAL
    </Text>
    <Row space={32}>
      <Link href="https://github.com/ymkz">
        <Icon src={github} alt="Link to GitHub" />
      </Link>
      <Link href="https://twitter.com/ymkzly">
        <Icon src={twitter} alt="Link to Twitter" />
      </Link>
      <Link href="https://facebook.com/ymkzly">
        <Icon src={facebook} alt="Link to Facebook" />
      </Link>
    </Row>
  </Section>
)

export default Social
