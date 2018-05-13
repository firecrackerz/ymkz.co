// @flow
import * as React from 'react'
import Title from '~/components/atoms/Title.js'
import Subtitle from '~/components/atoms/Subtitle.js'
import Description from '~/components/atoms/Description.js'
import Images from '~/components/molecules/Images.js'
import Links from '~/components/molecules/Links.js'
import narosirase1 from '~/images/narosirase_1.jpg'
import narosirase2 from '~/images/narosirase_2.jpg'
import type { ImageProps, LinkProps } from '~/types'

const images: Array<ImageProps> = [
  {
    src: narosirase1,
    landscape: false,
    border: false
  },
  {
    src: narosirase2,
    landscape: false,
    border: false
  }
]

const links: Array<LinkProps> = [
  {
    href: 'https://github.com/ymkz/narosirase',
    name: 'Repository - GitHub(ymkz/narosirase)'
  },
  {
    href: 'https://expo.io/@ymkz/narosirase',
    name: 'Expo - @ymkz/narosirase'
  }
]

const Narosirase = () => (
  <section>
    <Title id="narosirase">Narosirase</Title>
    <Subtitle>A web-novel tracker for Syosetuka ni Narou</Subtitle>
    <Description>
      Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
      <br />
      <br />
      僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。
      それを解決するために既にいくつかのアプリが公開されていますが、
      UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。
      ならば自分で作ってしまえばいいということでこのアプリは開発されました。
      <br />
      <br />
      Swiftでのネイティブ開発を採用せず、 React
      Nativeを採用したのは自分がフロントエンドで React
      に関する知識を持っていたことも大きいですが、
      UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。
      <br />
      今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
      これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。
    </Description>
    <Images images={images} />
    <Links links={links} />
  </section>
)

export default Narosirase
