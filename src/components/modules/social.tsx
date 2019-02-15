import React from 'react'
import Content from '../abstracts/content'
import Row from '../abstracts/row'
import LinkIcon from '../elements/link-icon'
import Title from '../elements/title'

export default function Social() {
  return (
    <Content>
      <Title>SOCIAL</Title>
      <Row space={24}>
        <LinkIcon
          src="/static/images/icon_github.svg"
          href="https://github.com/ymkz"
          alt="Link to GitHub"
        />
        <LinkIcon
          src="/static/images/icon_twitter.svg"
          href="https://twitter.com/ymkzly"
          alt="Link to Twitter"
        />
        <LinkIcon
          src="/static/images/icon_facebook.svg"
          href="https://facebook.com/ymkzly"
          alt="Link to Facebook"
        />
      </Row>
    </Content>
  )
}
