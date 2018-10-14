import * as React from 'react'
import portfolio_1 from 'src/images/portfolio_1.jpg'
import Row from 'src/components/templates/Row'
import Content from 'src/components/templates/Content'
import Section from 'src/components/templates/Section'
import Title from 'src/components/atoms/Title'
import Description from 'src/components/atoms/Description'
import Text from 'src/components/atoms/Text'
import ListItem from 'src/components/atoms/ListItem'
import Link from 'src/components/atoms/Link'
import Image from 'src/components/atoms/Image'

const Portfolio: React.SFC = () => (
  <Section id="portfolio">
    <Title>Protfolio</Title>
    <Description>The portfolio site about ymkz.</Description>
    <Content>
      <Text>
        このサイトであるPortfolioは自分についてや作ってきたものをまとめるために作成しました。
      </Text>
      <Text>
        Reactを用いたSPAとして構築され、TypeScriptで開発しています。またstyled-componentsを用いてstyle/cssの管理を簡便かつ管理しやすいように意識しています。ホスティングはNetlifyでPRを作成したらDeploy
        Previewsで確認し、masterにマージすることでデプロイされるという構成です。
      </Text>
    </Content>
    <Content as="ul">
      <ListItem>
        <Link href="https://github.com/ymkz/ymkz.co">Repository - GitHub(ymkz/ymkz.co)</Link>
      </ListItem>
    </Content>
    <Row space={16}>
      <Image src={portfolio_1} orientation="landscape" alt="portfolio_1" />
    </Row>
  </Section>
)

export default Portfolio
