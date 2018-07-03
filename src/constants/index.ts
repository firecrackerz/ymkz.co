import { ProductData } from 'src/components/templates/Product'
import image_cancelectures_native_1 from 'src/images/cancelectures_native_1.jpg'
import image_cancelectures_native_2 from 'src/images/cancelectures_native_2.jpg'
import image_narosirase_1 from 'src/images/narosirase_1.jpg'
import image_narosirase_2 from 'src/images/narosirase_2.jpg'
import image_portfolio_1 from 'src/images/portfolio_1.jpg'

export const color = {
  black: '#2e3440',
  alphaBlack: 'rgba(46, 52, 64, .75)',
  darkBlack: '#3b4252',
  middleBlack: '#434c5e',
  lightBlack: '#4c566a',
  white: '#eceff4'
}

export const constraint = {
  bottomPadding: '128px',
  contentWidth: '720px',
  headerHeight: '100px',
  mobilePadding: '16px',
  imageGutter: '24px',
  imageWidthLandscape: '256px',
  imageWidthPortrait: '128px'
}

export const portfolio: ProductData = {
  title: 'Portfolio',
  subtitle: 'The portfolio site about ymkz.',
  description:
    'このサイトであるPortfolioは自分のポートフォリオのようなものであり、 個人的なフロントエンドのまとめリポジトリのようなものです。\n\nPortfolioはTypeScriptで記述されReactで構築されたSPAです。スタイリングはstyled-componentsを用いたCSS in JSで名前の衝突を避けつつ管理しやすいCSSを目指しています。また勉強のためにAtomic Designなディレクトリ構造を採用しています。\n\nNetlifyにホスティングすることで運用しています。。Netlifyを用いているためPRの時点でDeploy Previewsが確認できるため、問題がなければmasterにmergeすることでproductionにデプロイされます。\nこのプロジェクトは自分にとってのフロントエンドの指標的リポジトリとするべく、いろいろなツールを導入しています。',
  images: [{ src: image_portfolio_1, dark: true, landscape: true }],
  links: [
    {
      name: 'Repository - GitHub(ymkz/portfolio)',
      url: 'https://github.com/ymkz/portfolio'
    }
  ]
}

export const narosirase: ProductData = {
  title: 'Narosirase',
  subtitle: 'A web-novel reader for Syosetuka-ni-Narou.',
  description:
    'Narosiraseは『小説家になろう』というWeb小説投稿サイトの小説の更新を追跡するためのアプリです。\n\n僕にとって本家サービスのブックマーク機能が使いづらく、更新を追いかけていくのに不便でした。 それを解決するために既にいくつかのアプリが公開されていますが、 UIがモダンでなかったりと自分が使う上で満足するものではありませんでした。 ならば自分で作ってしまえばいいということでこのアプリは開発されました。\n\nSwiftでのネイティブ開発を採用せず、 React Nativeを採用したのは自分がフロントエンドで React に関する知識を持っていたことも大きいですが、UIを構築して上でCSSライクな記述で組み立てていけるのが一番でした。今のところ、とりあえずの目的のための実装は完了し普段から使えるレベルにはなりましたが、 これからもよりよいUXを求めて機能追加や改修をしていきたいと思っています。',
  images: [{ src: image_narosirase_1 }, { src: image_narosirase_2 }],
  links: [
    {
      name: 'Repository - GitHub(ymkz/narosirase)',
      url: 'https://github.com/ymkz/narosirase'
    },
    {
      name: 'Expo - @ymkz/narosirase',
      url: 'https://expo.io/@ymkz/narosirase'
    }
  ]
}

export const cancelectures: ProductData = {
  title: 'Cancelectures',
  subtitle: 'A canceled rectures list viewer for Shimane Univ.',
  description:
    'Cancelecturesは島根大学の休講情報を手軽に確認するためのアプリケーションです。\n\n島根大学の休講情報は大学のWebサイト上で公開されていますが、深くネストした場所にあり毎回確認しにいくのが面倒でした。 面倒故に確認をせず授業に行ったら休講で無駄足だったみたいな自分の経験から、ワンクリックで確認できるようになれば便利なのにという思いから開発されました。 最初は自分のよくアクセスする Google Chrome ブラウザの拡張機能として開発しました。 Chromeの拡張機能を選んだ理由は簡単な構成で開発できること、 自分の現在のスキルセットにちょっと足すだけで実装できそうだったからです。結果初版は数日もかからず完成し、念のため大学に確認をとった上で公開することができました。\n\nその後React Nativeというものに出会い、 また拡張機能として開発した時のコードが既に古臭いものになりつつあるのを感じ、 よりモダンな実装でスマートフォンのアプリという形で実装してみたいと思い、 React Nativeを用いたアプリ版Cancelecturesを開発しました。アプリ版は拡張機能版で友人や知り合いから頂いたフィードバックを元にシンプルで見やすいUIを実装できたと思います。またコードの記述も自分の満足いくようなものができたと思っています。',
  images: [{ src: image_cancelectures_native_1 }, { src: image_cancelectures_native_2 }],
  links: [
    {
      name: 'Repository - GitHub(ymkz/cancelectures)',
      url: 'https://github.com/ymkz/cancelectures'
    },
    {
      name: 'Chrome Web Store - Cancelectures',
      url: 'https://chrome.google.com/webstore/detail/cancelectures/klfpecdgfnpijehpdelicgmojhbnmnim'
    },
    {
      name: 'Repository - GitHub(ymkz/cancelectures_native)',
      url: 'https://github.com/ymkz/cancelectures_native'
    },
    {
      name: 'Expo - @ymkz/cancelectures',
      url: 'https://expo.io/@ymkz/cancelectures'
    }
  ]
}
