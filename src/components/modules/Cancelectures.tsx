import * as React from 'react'
import Content from '../abstracts/Content'
import Row from '../abstracts/Row'
import Description from '../elements/Description'
import Image from '../elements/Image'
import Link from '../elements/Link'
import Name from '../elements/Name'
import Subtitle from '../elements/Subtitle'
import Ul from '../elements/Ul'

export default function Cancelectures() {
  return (
    <Content>
      <Name id="cancelectures">Cancelectures</Name>
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
        <Image
          orientation="portrait"
          src="/images/cancelectures_native_1.jpg"
          alt="cancelectures_native_1"
        />
        <Image
          orientation="portrait"
          src="/images/cancelectures_native_2.jpg"
          alt="cancelectures_native_2"
        />
      </Row>
    </Content>
  )
}
