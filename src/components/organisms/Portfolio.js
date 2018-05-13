// @flow
import * as React from 'react'
import Title from '~/components/atoms/Title.js'
import Subtitle from '~/components/atoms/Subtitle.js'
import Description from '~/components/atoms/Description.js'
import Images from '~/components/molecules/Images.js'
import Links from '~/components/molecules/Links.js'
import portfolio1 from '~/images/portfolio_1.jpg'
import type { ImageProps, LinkProps } from '~/types'

const images: Array<ImageProps> = [
  {
    src: portfolio1,
    landscape: true,
    border: true
  }
]

const links: Array<LinkProps> = [
  {
    href: 'https://github.com/ymkz/portfolio',
    name: 'Repository - GitHub(ymkz/portfolio)'
  }
]

const Portfolio = () => (
  <section>
    <Title id="portfolio">Portfolio</Title>
    <Subtitle>A portfolio site about ymkz</Subtitle>
    <Description>
      このサイトであるPortfolioは自分のポートフォリオのようなものであり、
      個人的なフロントエンドのまとめリポジトリのようなものです。
      <br />
      <br />
      PortfolioはReactで構築されたSPAです。
      デザインに関してはCSSファイルを一切用いずにstyled-componentsを用いて閉じたstyleで記述することで破綻しないように開発しました。
      また勉強のためにAtomic Designによる設計を試しています。
      <br />
      <br />
      デプロイに関しては、Circle CIでテストなどを走らせた後に、
      すべてがPassした場合にビルドしてNetlifyでデプロイするようになっています。
      Prettierを用いたコード整形、ESLintを用いたコードチェックなどを取り入れ、
      このリポジトリは自分にとってのフロントエンドの指標的リポジトリとするべく、いろいろなツールを導入しています。
    </Description>
    <Images images={images} />
    <Links links={links} />
  </section>
)

export default Portfolio
