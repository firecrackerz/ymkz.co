import AnchorJS from 'anchor-js'
import * as React from 'react'
import styled, { css } from 'react-emotion'
import Row from 'src/components/Row'
import { colors } from 'src/helpers/constants'
import cancelectures_native_1 from 'src/images/cancelectures_native_1.jpg'
import cancelectures_native_2 from 'src/images/cancelectures_native_2.jpg'
import narosirase_1 from 'src/images/narosirase_1.jpg'
import narosirase_2 from 'src/images/narosirase_2.jpg'
import portfolio_1 from 'src/images/portfolio_1.jpg'

const anchorClass = css`
  color: ${colors.black.light};
`

const anchors = new AnchorJS({
  icon: '#',
  placement: 'left',
  class: anchorClass
})

interface Props {
  orientation: 'landscape' | 'portrait'
}

const Container = styled('div')`
  margin: 0 auto;
  max-width: 768px;
  padding: 96px 16px;
  @media (max-width: 767px) {
    padding: 64px 16px;
  }
`

const Content = styled('div')`
  padding: 96px 0;
  @media (max-width: 767px) {
    padding: 64px 0;
  }
`

const Title = styled('div')`
  font-family: Futura;
  font-size: 4.2rem;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 2.8rem;
  }
`

const Subtitle = styled('div')`
  font-family: Futura;
  font-size: 1.4rem;
  font-weight: 700;
  margin: -1rem 0 1rem;
  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin: -0.5rem 0 1rem;
  }
`

const Description = styled('div')`
  line-height: 1.4;
`

const Link = styled.a`
  color: ${colors.white.default};
  line-height: 1.4;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`

const Image = styled.img`
  border: 1px solid ${colors.black.light};
  width: ${(props: Props) => (props.orientation === 'landscape' ? 256 : 128)}px;
`

const Ul = styled.ul`
  margin: 1.4rem 0 1.6rem;
  padding-left: 1.4rem;
`

function Work() {
  React.useEffect(() => {
    anchors
      .add('#portfolio')
      .add('#narosirase')
      .add('#cancelectures')
  })
  return (
    <Container>
      <Content>
        <Title id="portfolio">Portfolio</Title>
        <Subtitle>The portfolio site about ymkz.</Subtitle>
        <Description>
          このサイトであるPortfolioは自分についてや作ってきたものをまとめるために作成しました。
        </Description>
        <Description>
          Reactを用いたSPAとして構築され、TypeScriptで開発しています。またCSS&nbsp;in&nbsp;JSを用いてスタイルの管理を簡便かつ管理しやすいように意識しています。ホスティングはNetlifyで、PRを作成したらDeploy
          Previewsで確認し、masterにマージすることでデプロイされるという構成です。
        </Description>
        <Ul>
          <li>
            <Link href="https://github.com/ymkz/ymkz.co" rel="noopener noreferrer" target="_blank">
              Repository - GitHub(ymkz/ymkz.co)
            </Link>
          </li>
        </Ul>
        <Image orientation="landscape" src={portfolio_1} alt="portfolio_1" />
      </Content>
      <Content>
        <Title id="narosirase">Narosirase</Title>
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
          <Image orientation="portrait" src={narosirase_1} alt="narosirase_1" />
          <Image orientation="portrait" src={narosirase_2} alt="narosirase_2" />
        </Row>
      </Content>
      <Content>
        <Title id="cancelectures">Cancelectures</Title>
        <Subtitle>A canceled rectures list viewer for Shimane Univ.</Subtitle>
        <Description>
          Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
        </Description>
        <Description>
          休講情報は大学のサイトから見ることができますが、深いネストをたどる必要があり、またデザインもただの表というものだったので、ワンクリックで確認できるようになれば便利なのにという思いからGoogle&nbsp;Chromeの拡張機能として開発されました。
          その後ReactNativeというものに出会い、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
          React&nbsp;Nativeを用いたアプリ版Cancelecturesを開発しました。
        </Description>
        <Ul>
          <li>
            <Link href="https://github.com/ymkz/cancelectures">
              Repository - GitHub(ymkz/cancelectures)
            </Link>
          </li>
          <li>
            <Link href="https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim">
              Chrome Web Store - Cancelectures
            </Link>
          </li>
          <li>
            <Link href="https://github.com/ymkz/cancelectures_native">
              Repository - GitHub(ymkz/cancelectures_native)
            </Link>
          </li>
          <li>
            <Link href="https://expo.io/@ymkz/cancelectures">Expo - @ymkz/cancelectures</Link>
          </li>
        </Ul>
        <Row space={16}>
          <Image orientation="portrait" src={cancelectures_native_1} alt="cancelectures_native_1" />
          <Image orientation="portrait" src={cancelectures_native_2} alt="cancelectures_native_2" />
        </Row>
      </Content>
    </Container>
  )
}

export default Work
