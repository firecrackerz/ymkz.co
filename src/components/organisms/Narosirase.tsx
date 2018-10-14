import * as React from 'react'
import narosirase_1 from 'src/images/narosirase_1.jpg'
import narosirase_2 from 'src/images/narosirase_2.jpg'
import Row from 'src/components/templates/Row'
import Content from 'src/components/templates/Content'
import Section from 'src/components/templates/Section'
import Title from 'src/components/atoms/Title'
import Description from 'src/components/atoms/Description'
import Text from 'src/components/atoms/Text'
import ListItem from 'src/components/atoms/ListItem'
import Link from 'src/components/atoms/Link'
import Image from 'src/components/atoms/Image'

const Narosirase: React.SFC = () => (
  <Section id="narosirase">
    <Title>Narosirase</Title>
    <Description>A web-novel reader for Syosetuka-ni-Narou.</Description>
    <Content>
      <Text>
        Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。
      </Text>
      <Text>
        Swiftでのネイティブ開発を採用せず、 React Nativeを採用したのは自分がフロントエンドで React
        に関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、
        これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。
      </Text>
    </Content>
    <Content as="ul">
      <ListItem>
        <Link href="https://github.com/ymkz/narosirase">Repository - GitHub(ymkz/narosirase)</Link>
      </ListItem>
      <ListItem>
        <Link href="https://expo.io/@ymkz/narosirase">Expo - @ymkz/narosirase</Link>
      </ListItem>
    </Content>
    <Row space={16}>
      <Image src={narosirase_1} orientation="portrait" alt="narosirase_1" />
      <Image src={narosirase_2} orientation="portrait" alt="narosirase_2" />
    </Row>
  </Section>
)

export default Narosirase
