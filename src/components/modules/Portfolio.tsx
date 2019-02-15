import React from 'react'
import Row from '../abstracts/row'
import Content from '../abstracts/content'
import Description from '../elements/description'
import Image from '../elements/image'
import Link from '../elements/link'
import Name from '../elements/name'
import Subtitle from '../elements/subtitle'
import List from '../elements/list'

export default function Portfolio() {
  return (
    <Content>
      <Name id="portfolio">Portfolio</Name>
      <Subtitle>The portfolio site about ymkz.</Subtitle>
      <Description>
        このサイトであるPortfolioは自分についてや作ってきたものをまとめるために作成しました。
      </Description>
      <Description>
        Reactを用いたSPAとして構築され、TypeScriptで開発しています。またCSS&nbsp;in&nbsp;JSを用いてスタイルの管理を簡便かつ管理しやすいように意識しています。ホスティングはNetlifyで、PRを作成したらDeploy&nbsp;Previewsで確認し、masterにマージすることでデプロイされるという構成です。
      </Description>
      <List>
        <li>
          <Link href="https://github.com/ymkz/ymkz.co">Repository - GitHub(ymkz/ymkz.co)</Link>
        </li>
      </List>
      <Row space={16}>
        <Image orientation="landscape" src="/static/images/portfolio_1.webp" alt="portfolio_1" />
      </Row>
    </Content>
  )
}
