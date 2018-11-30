import styled from '@emotion/styled'
import * as React from 'react'
import { useWindowWidth } from 'src/helpers/functions'

export default function Home() {
  const width = useWindowWidth()

  return (
    <React.Fragment>
      {width > 767 ? (
        <Container>
          <div>
            <Title>Hello,&nbsp;I&apos;m&nbsp;ymkz</Title>
            <Text>------&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;games,&nbsp;seriously</Text>
          </div>
        </Container>
      ) : (
        <MobileContainer>
          <MobileTitle>Hello,</MobileTitle>
          <MobileTitle>I&apos;m</MobileTitle>
          <MobileTitle>ymkz</MobileTitle>
          <MobileText>------&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;games,&nbsp;seriously</MobileText>
        </MobileContainer>
      )}
    </React.Fragment>
  )
}

const Container = styled('div')`
  width: 100vw;
  height: calc(100vh - 100px);
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled('div')`
  font-family: Futura;
  font-size: 7rem;
  font-weight: 700;
`

const Text = styled('div')`
  font-family: Futura;
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: -1.5rem;
  margin-left: 0.5rem;
`

const MobileContainer = styled('div')`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 16px 100px 16px;
`

const MobileTitle = styled('div')`
  font-family: Futura;
  font-size: 5rem;
  font-weight: 700;
  margin-top: -1rem;
`

const MobileText = styled('div')`
  font-family: Futura;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 2rem;
`
