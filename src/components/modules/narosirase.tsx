import React from 'react'
import Row from '../abstracts/row'
import Content from '../abstracts/content'
import Description from '../elements/description'
import Image from '../elements/image'
import Link from '../elements/link'
import Name from '../elements/name'
import Subtitle from '../elements/subtitle'
import List from '../elements/list'

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
      <Description>
        本家様のテキストダウンロードに関するポリシーの変更に伴い、アプリケーションの公開を停止しています。
      </Description>
      <List>
        <li>
          <Link href="https://github.com/ymkz/narosirase">
            Repository - GitHub(ymkz/narosirase)
          </Link>
        </li>
      </List>
      <Row space={16}>
        <Image orientation="portrait" src="/static/images/narosirase_1.webp" alt="narosirase_1" />
        <Image orientation="portrait" src="/static/images/narosirase_2.webp" alt="narosirase_2" />
      </Row>
    </Content>
  )
}
