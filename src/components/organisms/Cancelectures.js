// @flow
import * as React from 'react'
import Title from '~/components/atoms/Title.js'
import Subtitle from '~/components/atoms/Subtitle.js'
import Description from '~/components/atoms/Description.js'
import Images from '~/components/molecules/Images.js'
import Links from '~/components/molecules/Links.js'
import cancelectures1 from '~/images/cancelectures_native_1.jpg'
import cancelectures2 from '~/images/cancelectures_native_2.jpg'
import type { ImageProps, LinkProps } from '~/types'

const images: Array<ImageProps> = [
  {
    src: cancelectures1,
    landscape: false,
    border: false
  },
  {
    src: cancelectures2,
    landscape: false,
    border: false
  }
]

const links: Array<LinkProps> = [
  {
    href: 'https://github.com/ymkz/cancelectures',
    name: 'Repository - GitHub(ymkz/cancelectures)'
  },
  {
    href:
      'https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim',
    name: 'Chrome Web Store - Cancelectures'
  },
  {
    href: 'https://github.com/ymkz/cancelectures-rn',
    name: 'Repository - GitHub(ymkz/cancelectures-RN)'
  },
  {
    href: 'https://expo.io/@ymkz/cancelectures',
    name: 'Expo - @ymkz/cancelectures'
  }
]

const Cancelectures = () => (
  <section>
    <Title id="cancelectures">Cancelectures</Title>
    <Subtitle>A canceld rectures list viewer for Shimane Univ.</Subtitle>
    <Description>
      Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
      <br />
      <br />
      島根大学の休講情報は大学のWebサイト上で公開されていますが、深くネストした場所にあり毎回確認しにいくのが面倒でした。
      面倒故に確認をせず授業に行ったら休講で無駄足だったみたいな自分の経験から、ワンクリックで確認できるようになれば便利なのにという思いから開発されました。
      最初は自分のよくアクセスする Google Chrome
      ブラウザの拡張機能として開発しました。
      Chromeの拡張機能を選んだ理由は簡単な構成で開発できること、
      自分の現在のスキルセットにちょっと足すだけで実装できそうだったからです。
      結果初版は数日もかからず完成し、念のため大学に確認をとった上で公開することができました。
      <br />
      <br />
      その後React Nativeというものに出会い、
      また拡張機能として開発した時のコードが既に古臭いものになりつつあるのを感じ、
      よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
      React Nativeを用いたアプリ版Cancelecturesを開発しました。<br />
      アプリ版は拡張機能版で友人や知り合いから頂いたフィードバックを元にシンプルで見やすいUIを実装できたと思います。またコードの記述も自分の満足いくようなものができたと思っています。
    </Description>
    <Images images={images} />
    <Links links={links} />
  </section>
)

export default Cancelectures
