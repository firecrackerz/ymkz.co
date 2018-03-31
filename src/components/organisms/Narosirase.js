import React from 'react'
import Title from '../atoms/Title'
import Code from '../atoms/Code'
import Description from '../atoms/Description'
import Images from '../molecules/Images'
import Links from '../molecules/Links'
import narosirase1 from '../../images/narosirase1.jpg'
import narosirase2 from '../../images/narosirase2.jpg'

const images = [
  {
    src: narosirase1
  },
  {
    src: narosirase2
  }
]

const links = [
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
    <Description>
      <Code>Narosirase</Code>は『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
      <br />
      <br />
      僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。
      それを解決するために既にいくつかのアプリが公開されていますが、
      UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。
      ならば自分で作ってしまえばいいということでこのアプリは開発されました。
      <br />
      <br />
      Swiftでのネイティブ開発を採用せず、
      <Code>React Native</Code>を採用したのは自分がフロントエンドで<Code>
        React
      </Code>に関する知識を持っていたことも大きいですが、
      UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。
      <br />
      今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
      これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。
      <br />
    </Description>
    <Images images={images} />
    <Links links={links} />
  </section>
)

export default Narosirase
