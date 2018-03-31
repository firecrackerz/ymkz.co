import React from 'react'
import Title from '../atoms/Title'
import Code from '../atoms/Code'
import Description from '../atoms/Description'
import Images from '../molecules/Images'
import Links from '../molecules/Links'
import portfolio1 from '../../images/portfolio1.jpg'

const images = [
  {
    src: portfolio1,
    landscape: true,
    border: true
  }
]

const links = [
  {
    href: 'https://github.com/ymkz/portfolio',
    name: 'Repository - GitHub(ymkz/portfolio)'
  }
]

const Portfolio = () => (
  <section>
    <Title id="portfolio">Portfolio</Title>
    <Description>
      このサイトである<Code>Portfolio</Code>は自分のポートフォリオのようなものであり、
      個人的なフロントエンドのまとめリポジトリのようなものです。
      <br />
      <br />
      <Code>Portfolio</Code>は<Code>React</Code>で構築されたSPAです。
      デザインに関してはCSSファイルを一切用いずに<Code>styled-components</Code>を用いて閉じたstyleで記述することで破綻しないように開発しました。
      また勉強のために<Code>Atomic Design</Code>による設計を試しています。
      <br />
      <br />
      デプロイに関しては、<Code>Circle CI</Code>でテストなどを走らせた後に、
      すべてがPassした場合にビルドして<Code>Netlify</Code>でデプロイするようになっています。
      <Code>Prettier</Code>を用いたコード整形、
      <Code>ESLint</Code>を用いたコードチェックなどを取り入れ、
      このリポジトリは自分にとってのフロントエンドの指標的リポジトリとするべく、いろいろなツールを導入しています。
    </Description>
    <Images images={images} />
    <Links links={links} />
  </section>
)

export default Portfolio
