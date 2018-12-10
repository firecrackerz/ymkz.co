import styled from '@emotion/styled'
import * as React from 'react'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Greeting>Hello,&nbsp;</Greeting>
          <Greeting>I&apos;m&nbsp;</Greeting>
          <Greeting>ymkz</Greeting>
        </Content>
        <Message>------&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;games,&nbsp;seriously</Message>
      </Wrapper>
    </Container>
  )
}

const Container = styled('div')`
  height: calc(100vh - 100px);
  padding-bottom: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    align-items: flex-start;
    padding: 0 16px;
  }
`

const Wrapper = styled('div')`
  display: flex;
  flex-flow: column;
`

const Content = styled('div')`
  display: flex;
  flex-flow: row;
  @media (max-width: 767px) {
    flex-flow: column;
  }
`

const Greeting = styled('div')`
  font-family: 'Renner*';
  font-size: 6.25rem;
  font-weight: 900;
  @media (max-width: 767px) {
    font-size: 4rem;
    &:not(:last-child) {
      margin-bottom: -1.6rem;
    }
  }
`

const Message = styled('div')`
  font-family: 'Renner*';
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: -1.5rem;
  margin-left: 0.5rem;
  @media (max-width: 767px) {
    margin: 0;
  }
`

// import { useTranslation } from 'react-i18next/hooks'

// export default function Home() {
//   const [t, i18n] = useTranslation()
//   const changeLanguage = React.useCallback(
//     () => i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en'),
//     [i18n]
//   )

//   return (
//     <>
//       <div>
//         <div>{t('welcome')}</div>
//         <button onClick={changeLanguage}>{t('intl.change')}</button>
//       </div>
//     </>
//   )
// }
