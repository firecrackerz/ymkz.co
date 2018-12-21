import * as React from 'react'
import Content from '../abstracts/Content'
import Row from '../abstracts/Row'
import LinkIcon from '../elements/LinkIcon'
import Title from '../elements/Title'

export default function Profile() {
  return (
    <Content>
      <Title>SOCIAL</Title>
      <Row space={24}>
        <LinkIcon src="/images/icon_github.svg" href="https://github.com/ymkz" />
        <LinkIcon src="/images/icon_twitter.svg" href="https://twitter.com/ymkzly" />
        <LinkIcon src="/images/icon_facebook.svg" href="https://facebook.com/ymkzly" />
      </Row>
    </Content>
  )
}