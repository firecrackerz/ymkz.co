import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import GitHub from '../images/icons/github.svg'
import Twitter from '../images/icons/twitter.svg'
import Facebook from '../images/icons/facebook.svg'
import Steam from '../images/icons/steam.svg'
import Default from './Default'
import Mobile from './Mobile'

const About = () => (
  <Container>
    <Default>
      <DefaultMain>
        <Who>
          <Name>Kaz</Name>
          <Aka>ymkz</Aka>
          <Name>Yamashita</Name>
        </Who>
        <Section>
          <Title>ABOUT</Title>
          <Block>
            <Text>I'm a front-end engineer nearby UI/UX engineering.</Text>
            <Text>And I'm a student, major in Information Technology.</Text>
            <Text>Researching Human-Computer Interaction with Eye-Tracking.</Text>
          </Block>
        </Section>
        <Section>
          <Title>SKILLS</Title>
          <Row>
            <Skill>ES6+</Skill>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>CSS Modules</Skill>
            <Skill>styled-components</Skill>
            <Skill>Webpack</Skill>
            <Skill>FuseBox</Skill>
            <Skill>Ruby on Rails</Skill>
          </Row>
        </Section>
        <Section>
          <Title>SOCIAL</Title>
          <Link href="https://github.com/ymkz" target="_blank" first>
            <Icon src={GitHub} />
          </Link>
          <Link href="https://twitter.com/ymkzly" target="_blank">
            <Icon src={Twitter} />
          </Link>
          <Link href="https://facebook.com/ymkzly" target="_blank">
            <Icon src={Facebook} />
          </Link>
          <Link href="http://steamcommunity.com/id/ymkz" target="_blank" last>
            <Icon src={Steam} />
          </Link>
        </Section>
        <Section>
          <Title>CONTACT</Title>
          <Block>
            <Text>Play game with me!</Text>
            <Text>
              Contact me from SNS accounts or <Mailto href="mailto:ymkzly@gmail.com">ymkzly@gmail.com</Mailto>.
            </Text>
          </Block>
        </Section>
      </DefaultMain>
    </Default>
    <Mobile>
      <MobileMain>
        <MobileWho>
          <MobileName>Kaz</MobileName>
          <MobileAka>ymkz</MobileAka>
          <MobileName>Yamashita</MobileName>
        </MobileWho>
        <MobileSection>
          <MobileTitle>ABOUT</MobileTitle>
          <Block>
            <Text>I'm a front-end engineer nearby UI/UX engineering.</Text>
            <Text>And I'm a student, major in Information Technology.</Text>
            <Text>Researching Human-Computer Interaction with Eye-Tracking.</Text>
          </Block>
        </MobileSection>
        <MobileSection>
          <MobileTitle>SKILLS</MobileTitle>
          <Row>
            <MobileSkill>ES6+</MobileSkill>
            <MobileSkill>React</MobileSkill>
            <MobileSkill>Redux</MobileSkill>
            <MobileSkill>CSS Modules</MobileSkill>
            <MobileSkill>styled-components</MobileSkill>
            <MobileSkill>Webpack</MobileSkill>
            <MobileSkill>FuseBox</MobileSkill>
            <MobileSkill>Ruby on Rails</MobileSkill>
          </Row>
        </MobileSection>
        <MobileSection>
          <MobileTitle>SOCIAL</MobileTitle>
          <Link href="https://github.com/ymkz" target="_blank" first>
            <Icon src={GitHub} />
          </Link>
          <Link href="https://twitter.com/ymkzly" target="_blank">
            <Icon src={Twitter} />
          </Link>
          <Link href="https://facebook.com/ymkzly" target="_blank">
            <Icon src={Facebook} />
          </Link>
          <Link href="http://steamcommunity.com/id/ymkz" target="_blank" last>
            <Icon src={Steam} />
          </Link>
        </MobileSection>
        <MobileSection>
          <MobileTitle>CONTACT</MobileTitle>
          <Block>
            <Text>Play game with me!</Text>
            <Text>
              Contact me from SNS accounts or <Mailto href="mailto:ymkzly@gmail.com">ymkzly@gmail.com</Mailto>
            </Text>
          </Block>
        </MobileSection>
      </MobileMain>
    </Mobile>
  </Container>
)

export default About

const Container = styled.div`width: 100%;`

const DefaultMain = styled.div`
  width: 100%;
  padding: 0 100px;
`

const MobileMain = styled.div`
  width: 100%;
  padding: 0 24px;
`

const Section = styled.section`
  margin: 124px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Title = styled.div`
  color: ${colors.ashesGrey};
  font-size: 0.8em;
  width: 300px;
  min-width: 300px;
`

const Block = styled.div``

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Who = styled.section`
  height: 512px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
`

const Name = styled.div`
  font-size: 8em;
  color: ${colors.ashesGrey};
  font-weight: 900;
`

const Aka = styled.div`
  font-size: 10em;
  font-weight: 900;
  position: absolute;
  top: 128px;
  left: 0;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
`

const Link = styled.a`
  text-decoration: none;
  margin: 0 ${props => (props.last ? 0 : '16px')} 0 ${props => (props.first ? 0 : '16px')};
`

const Text = styled.p`
  color: ${colors.ghostWhite};
  line-height: 1.85em;
  font-size: 1.15em;
`

const Skill = styled.div`
  width: 200px;
  min-width: 200px;
  margin: 8px 0;
  font-size: 1.1em;
`

const Mailto = styled.a`
  color: ${colors.pureWhite};
  font-weight: 900;
  text-decoration: none;
`

const MobileWho = styled.section`
  height: 320px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
`

const MobileName = styled.div`
  font-size: 4em;
  color: ${colors.ashesGrey};
  font-weight: 900;
`

const MobileAka = styled.div`
  font-size: 5em;
  font-weight: 900;
  position: absolute;
  top: 96px;
  left: 0;
`

const MobileSection = styled.section`margin-bottom: 96px;`

const MobileTitle = styled.div`
  color: ${colors.ashesGrey};
  font-size: 0.8em;
  margin-bottom: 20px;
`

const MobileSkill = styled.div`
  width: 148px;
  margin: 8px 0;
  font-size: 1.1em;
`
