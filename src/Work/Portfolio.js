import React from 'react'
import styled from 'styled-components'
import ImageZoom from 'react-medium-image-zoom'
import Portfolio1 from './images/portfolio-1.png'

const PortfolioComponent = () => (
  <div>
    <AppTitle>Portfolio</AppTitle>
    <AppDescription>
      このサイトであるPortfolioは自分の活動のまとめや自分についてを書くと共に、個人的なフロントエンドのベースリポジトリのようなものです。
      <br />
      <br />
      PortfolioはReactで構築されたSPAです。スタイリングはCSS ModulesやCSS in
      JSのいくつかのライブラリを試した結果、styled-componentsが現状ベストなツールだと判断し、styled-componentsを用いた完全に閉じたstyleで記述されています。
      <br />
      デプロイに関しては、CircleCIでテストなどを走らせた後に、すべてがPassした場合にビルドしてNetlifyでデプロイするようになっています。コードはPrettierでフォーマット、ESLintでJavaScriptのコードチェック、Stylelintでstyled-componentsで記述したstyleのlint、Jestでユニットテスト、TestcafeでE2Eのストーリーテスト(もどき)を簡易的に行っています。このリポジトリは自分にとってのフロントエンドの指標的リポジトリとするべく、いろいろなツールを導入しています。
      <br />
      GitHubのREADMEにありますが、ビルドの状態やコードスタイルについてバッジを貼っています。
      <br />
    </AppDescription>
    <AppImages>
      <ImageZoom
        image={{
          src: Portfolio1,
          alt: 'Cancelecture Main View',
          style: { width: '256px', border: '1px solid #eceff1' }
        }}
        defaultStyles={{
          overlay: { backgroundColor: 'rgba(34, 34, 42, .8)' }
        }}
      />
    </AppImages>
    <AppLinker>
      <AppLink>
        <Link href="https://github.com/ymkz/portfolio">Repository - GitHub(ymkz/portfolio)</Link>
      </AppLink>
    </AppLinker>
  </div>
)

export default PortfolioComponent

export const AppTitle = styled.div`
  font-size: 6rem;
  font-weight: 900;
  padding: 72px 0 12px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const AppDescription = styled.div`
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 24px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`

export const AppImages = styled.div`
  overflow: hidden;
  padding: 24px 0;
`

export const AppLinker = styled.div`
  padding: 24px 0;
`

export const AppLink = styled.li`
  margin: 12px 0;
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #fefeff;
  text-decoration: none;
`
