import React from 'react'
import styled from 'styled-components'
import ImageZoom from 'react-medium-image-zoom'
import { colors } from '../constants'
import Default from './Default'
import Mobile from './Mobile'

const Narosirase = () => (
  <Container id="narosirase">
    <Default>
      <DefaultMain>
        <App>
          <AppTitle>Narosirase</AppTitle>
          <AppDescription>
            Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
            <br />
            <br />
            僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。それを解決するために既にいくつかのアプリが公開されていますが、UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。ならば自分で作ってしまえばいいということでこのアプリは開発されました。
            <br />
            <br />
            Swiftでのネイティブ開発を採用せず、React
            Nativeを採用したのは自分がフロントエンドでReactに関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。<br />
            今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。<br />
          </AppDescription>
          <AppImages>
            <ImageZoom
              image={{
                src: '/assets/narosirase-1.png',
                alt: 'Narosirase Main View',
                style: { width: '128px', marginRight: '24px', marginBottom: '20px' }
              }}
              defaultStyles={{
                overlay: { backgroundColor: colors.gorgeousPurpleAlpha }
              }}
            />
            <ImageZoom
              image={{
                src: '/assets/narosirase-2.png',
                alt: 'Narosirase Setting View',
                style: { width: '128px', marginRight: '24px', marginBottom: '20px' }
              }}
              defaultStyles={{
                overlay: { backgroundColor: colors.gorgeousPurpleAlpha }
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
        </App>
      </DefaultMain>
    </Default>
    <Mobile>
      <MobileMain>
        <App>
          <MobileAppTitle>Narosirase</MobileAppTitle>
          <MobileAppDescription>
            Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
            <br />
            <br />
            僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。それを解決するために既にいくつかのアプリが公開されていますが、UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。ならば自分で作ってしまえばいいということでこのアプリは開発されました。
            <br />
            <br />
            Swiftでのネイティブ開発を採用せず、React
            Nativeを採用したのは自分がフロントエンドでReactに関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。<br />
            今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。<br />
          </MobileAppDescription>
          <AppImages>
            <ImageZoom
              image={{
                src: '/assets/narosirase-1.png',
                alt: 'Narosirase Main View',
                style: { width: '128px', marginRight: '24px', marginBottom: '20px' }
              }}
              defaultStyles={{
                overlay: { backgroundColor: colors.gorgeousPurpleAlpha }
              }}
            />
            <ImageZoom
              image={{
                src: '/assets/narosirase-2.png',
                alt: 'Narosirase Setting View',
                style: { width: '128px', marginRight: '24px', marginBottom: '20px' }
              }}
              defaultStyles={{
                overlay: { backgroundColor: colors.gorgeousPurpleAlpha }
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
        </App>
      </MobileMain>
    </Mobile>
  </Container>
)

export default Narosirase

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
  line-height: 36px;
  padding: 48px 0;
`

const MobileAppDescription = styled.div`
  color: ${colors.ghostWhite};
  font-size: 15px;
  line-height: 28px;
  padding: 26px 0;
`

const AppImages = styled.div`
  padding: 26px 0;
  overflow: hidden;
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
