import * as React from 'react'
import Content from '../abstracts/Content'
import Row from '../abstracts/Row'
import Description from '../elements/Description'
import Image from '../elements/Image'
import Link from '../elements/Link'
import Name from '../elements/Name'
import Subtitle from '../elements/Subtitle'
import Ul from '../elements/Ul'

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
      <Ul>
        <li>
          <Link href="https://github.com/ymkz/ymkz.co">Repository - GitHub(ymkz/ymkz.co)</Link>
        </li>
      </Ul>
      <Row space={16}>
        <Image orientation="landscape" src="/images/portfolio_1.jpg" alt="portfolio_1" />
      </Row>
    </Content>
  )
}
