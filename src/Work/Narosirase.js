import React from 'react'
import styled from 'styled-components'
import ImageZoom from 'react-medium-image-zoom'
import Narosirase1 from './images/narosirase-1.jpg'
import Narosirase2 from './images/narosirase-2.jpg'

const NarosiraseComponent = () => (
  <div>
    <AppTitle>Narosirase</AppTitle>
    <AppDescription>
      Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
      <br />
      <br />
      僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。それを解決するために既にいくつかのアプリが公開されていますが、UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。ならば自分で作ってしまえばいいということでこのアプリは開発されました。
      <br />
      <br />
      Swiftでのネイティブ開発を採用せず、React
      Nativeを採用したのは自分がフロントエンドでReactに関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。<br
      />
      今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。<br
      />
    </AppDescription>
    <AppImages>
      <ImageZoom
        image={{
          src: Narosirase1,
          alt: 'Narosirase Main View',
          style: { width: '128px' }
        }}
        defaultStyles={{
          overlay: { backgroundColor: 'rgba(34, 34, 42, .8)' }
        }}
      />
      <ImageZoom
        image={{
          src: Narosirase2,
          alt: 'Narosirase Setting View',
          style: { width: '128px', marginLeft: '24px' }
        }}
        defaultStyles={{
          overlay: { backgroundColor: 'rgba(34, 34, 42, .8)' }
        }}
      />
    </AppImages>
    <AppLinker>
      <AppLink>
        <Link href="https://github.com/ymkz/narosirase">Repository - GitHub(ymkz/narosirase)</Link>
      </AppLink>
      <AppLink>
        <Link href="https://github.com/ymkz/narosirase">Expo - @ymkz/narosirase</Link>
      </AppLink>
    </AppLinker>
  </div>
)

export default NarosiraseComponent

const AppTitle = styled.div`
  font-size: 6rem;
  font-weight: 900;
  padding: 72px 0 12px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
const AppDescription = styled.div`
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 24px 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`
const AppImages = styled.div`
  overflow: hidden;
  padding: 24px 0;
`
const AppLinker = styled.div`
  padding: 24px 0;
`
const AppLink = styled.li`
  margin: 12px 0;
`
const Link = styled.a.attrs({
  target: '_blank'
})`
  color: #fefeff;
  text-decoration: none;
`
