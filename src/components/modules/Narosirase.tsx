import * as React from 'react'
import Content from '../abstracts/Content'
import Row from '../abstracts/Row'
import Description from '../elements/Description'
import Image from '../elements/Image'
import Link from '../elements/Link'
import Name from '../elements/Name'
import Subtitle from '../elements/Subtitle'
import Ul from '../elements/Ul'

export default function Narosirase() {
  return (
    <Content>
      <Name id="narosirase">Narosirase</Name>
      <Subtitle>A web-novel reader for Syosetuka-ni-Narou.</Subtitle>
      <Description>
        Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
      </Description>
      <Description>
        Swiftでのネイティブ開発を採用せず、React&nbsp;Nativeを採用したのは自分がフロントエンドでReact
        に関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
        これからもよりよいUXを探して機能追加や改修をしていきたいと思っています。
      </Description>
      <Ul>
        <li>
          <Link href="https://github.com/ymkz/narosirase">
            Repository - GitHub(ymkz/narosirase)
          </Link>
        </li>
        <li>
          <Link href="https://expo.io/@ymkz/narosirase">Expo - @ymkz/narosirase</Link>
        </li>
      </Ul>
      <Row space={16}>
        <Image orientation="portrait" src="/images/narosirase_1.jpg" alt="narosirase_1" />
        <Image orientation="portrait" src="/images/narosirase_2.jpg" alt="narosirase_2" />
      </Row>
    </Content>
  )
}
