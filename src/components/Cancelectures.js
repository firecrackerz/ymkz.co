import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import Default from './Default'
import Mobile from './Mobile'

const Cancelectures = () => (
  <Container id="cancelectures">
    <Default>
      <DefaultMain>
        <App>
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
            その後React Nativeというものに出会い、また拡張機能として開発した時のコードが既に古臭いものになりつつあるのを感じ、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、React
            Nativeを用いたアプリ版Cancelecturesを開発しました。<br />
            アプリ版は拡張機能版で友人や知り合いから頂いたフィードバックを元にシンプルで見やすいなUIを実装できたと思います。またコードの記述も自分の満足いくようなものができたと思っています。<br />
          </AppDescription>
          <AppImages>
            <AppImage src="assets/cancelectures-1.png" />
            <AppImage src="assets/cancelectures-2.png" />
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
              <Link href="https://github.com/ymkz/cancelectures">Expo - @ymkz/cancelectures</Link>
            </AppLink>
          </AppLinker>
        </App>
      </DefaultMain>
    </Default>
    <Mobile>
      <MobileMain>
        <App>
          <MobileAppTitle>Cancelectures</MobileAppTitle>
          <MobileAppDescription>
            Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。
            <br />
            <br />
            島根大学の休講情報は大学のWebサイト上で公開されていますが、深くネストした場所にあり毎回確認しにいくのが面倒でした。面倒故に確認をせず授業に行ったら休講で無駄足だったみたいな自分の経験から、ワンクリックで確認できるようになれば便利なのにという思いから開発されました。
            最初は自分のよくアクセスするGoogle
            Chromeブラウザの拡張機能として開発しました。Chromeの拡張機能を選んだ理由は簡単な構成で開発できること、自分の現在のスキルセットにちょっと足すだけで実装できそうだったからです。結果初版は数日もかからず完成し、念のため大学に確認をとった上で公開することができました。
            <br />
            <br />
            その後React Nativeというものに出会い、また拡張機能として開発した時のコードが既に古臭いものになりつつあるのを感じ、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、React
            Nativeを用いたアプリ版Cancelecturesを開発しました。<br />
            アプリ版は拡張機能版で友人や知り合いから頂いたフィードバックを元にシンプルで見やすいなUIを実装できたと思います。またコードの記述も自分の満足いくようなものができたと思っています。<br />
          </MobileAppDescription>
          <AppImages>
            <AppImage src="assets/cancelectures-1.png" />
            <AppImage src="assets/cancelectures-2.png" />
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
              <Link href="https://github.com/ymkz/cancelectures">Expo - @ymkz/cancelectures</Link>
            </AppLink>
          </AppLinker>
        </App>
      </MobileMain>
    </Mobile>
  </Container>
)

export default Cancelectures

const Container = styled.div`width: 100%;`

const DefaultMain = styled.div`
  width: 100%;
  padding: 0 100px;
`

const MobileMain = styled.div`
  width: 100%;
  padding: 0 24px;
`

const App = styled.section`width: 100%;`

const AppTitle = styled.div`
  color: ${colors.ghostWhite};
  font-size: 96px;
  font-weight: 900;
  padding: 96px 0;
`

const MobileAppTitle = styled.div`
  color: ${colors.ghostWhite};
  font-size: 48px;
  font-weight: 900;
  padding: 26px 0;
`

const AppDescription = styled.div`
  color: ${colors.ghostWhite};
  font-size: 17px;
  line-height: 28px;
  padding: 48px 0;
`

const MobileAppDescription = styled.div`
  color: ${colors.ghostWhite};
  font-size: 15px;
  line-height: 28px;
  padding: 26px 0;
`

const AppImages = styled.div`padding: 26px 0;`

const AppImage = styled.img`
  width: 128px;
  margin-right: 24px;
  margin-bottom: 20px;
`

const AppLinker = styled.div`padding: 48px 0;`

const AppLink = styled.li`margin: 10px 0;`

const Link = styled.a.attrs({
  target: '_blank'
})`
  text-decoration: none;
  color: ${colors.ghostWhite};
  font-size: 16px;
`
