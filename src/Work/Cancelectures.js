import React from 'react'
import styled from 'styled-components'
import ImageZoom from 'react-medium-image-zoom'
import Cancelectures1 from './images/cancelectures-1.jpg'
import Cancelectures2 from './images/cancelectures-2.jpg'

const CancelecturesComponent = () => (
  <div>
    <AppTitle>Cancelectures</AppTitle>
    <AppDescription>
      Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
      <br />
      <br />
      島根大学の休講情報は大学のWebサイト上で公開されていますが、深くネストした場所にあり毎回確認しにいくのが面倒でした。面倒故に確認をせず授業に行ったら休講で無駄足だったみたいな自分の経験から、ワンクリックで確認できるようになれば便利なのにという思いから開発されました。
      最初は自分のよくアクセスするGoogle
      Chromeブラウザの拡張機能として開発しました。Chromeの拡張機能を選んだ理由は簡単な構成で開発できること、自分の現在のスキルセットにちょっと足すだけで実装できそうだったからです。結果初版は数日もかからず完成し、念のため大学に確認をとった上で公開することができました。
      <br />
      <br />
      その後React
      Nativeというものに出会い、また拡張機能として開発した時のコードが既に古臭いものになりつつあるのを感じ、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、React
      Nativeを用いたアプリ版Cancelecturesを開発しました。<br />
      アプリ版は拡張機能版で友人や知り合いから頂いたフィードバックを元にシンプルで見やすいなUIを実装できたと思います。またコードの記述も自分の満足いくようなものができたと思っています。<br />
    </AppDescription>
    <AppImages>
      <ImageZoom
        image={{
          src: Cancelectures1,
          alt: 'Narosirase Main View',
          style: { width: '128px' }
        }}
        defaultStyles={{
          overlay: { backgroundColor: 'rgba(34, 34, 42, .8)' }
        }}
      />
      <ImageZoom
        image={{
          src: Cancelectures2,
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
        <Link href="https://github.com/ymkz/cancelectures">Repository - GitHub(ymkz/cancelectures)</Link>
      </AppLink>
      <AppLink>
        <Link href="https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim">
          Chrome Web Store - Cancelectures
        </Link>
      </AppLink>
      <AppLink>
        <Link href="https://github.com/ymkz/cancelectures-rn">Repository - GitHub(ymkz/cancelectures-RN)</Link>
      </AppLink>
      <AppLink>
        <Link href="https://expo.io/@ymkz/cancelectures">Expo - @ymkz/cancelectures</Link>
      </AppLink>
    </AppLinker>
  </div>
)

export default CancelecturesComponent

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
