import * as React from 'react'
import cancelectures_native_1 from 'src/images/cancelectures_native_1.jpg'
import cancelectures_native_2 from 'src/images/cancelectures_native_2.jpg'
import Row from 'src/components/templates/Row'
import Content from 'src/components/templates/Content'
import Section from 'src/components/templates/Section'
import Title from 'src/components/atoms/Title'
import Description from 'src/components/atoms/Description'
import Text from 'src/components/atoms/Text'
import ListItem from 'src/components/atoms/ListItem'
import Link from 'src/components/atoms/Link'
import Image from 'src/components/atoms/Image'

const Cancelectures: React.SFC = () => (
  <Section id="cancelectures">
    <Title>Cancelectures</Title>
    <Description>A canceled rectures list viewer for Shimane Univ.</Description>
    <Content>
      <Text>Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。</Text>
      <Text>
        休講情報は大学のサイトから見ることができますが、深いネストをたどる必要があり、またデザインもただの表というものだったので、ワンクリックで確認できるようになれば便利なのにという思いからChromeの拡張機能として開発されました。
        その後ReactNativeというものに出会い、よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、
        ReactNativeを用いたアプリ版Cancelecturesを開発しました。
      </Text>
    </Content>
    <Content as="ul">
      <ListItem>
        <Link href="https://github.com/ymkz/cancelectures">
          Repository - GitHub(ymkz/cancelectures)
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim">
          Chrome Web Store - Cancelectures
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/ymkz/cancelectures_native">
          Repository - GitHub(ymkz/cancelectures_native)
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://expo.io/@ymkz/cancelectures">Expo - @ymkz/cancelectures</Link>
      </ListItem>
    </Content>
    <Row space={16}>
      <Image src={cancelectures_native_1} orientation="portrait" alt="cancelectures_native_1" />
      <Image src={cancelectures_native_2} orientation="portrait" alt="cancelectures_native_2" />
    </Row>
  </Section>
)

export default Cancelectures
