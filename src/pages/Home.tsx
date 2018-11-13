import * as React from 'react'
import { default as styled, keyframes } from 'react-emotion'
import MediaQuery from 'react-responsive'
import Typing from 'react-typing-animation'

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContainerMobile = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: calc(100vh - 100px);
  padding: 0 16px 100px;
`

const Title = styled.div`
  font-family: Futura;
  font-size: 7rem;
  font-weight: 700;
`

const TitleMobile = styled.div`
  font-family: Futura;
  font-size: 5rem;
  font-weight: 700;
  margin-top: -1.4rem;
`

const Motto = styled.div`
  font-family: Futura;
  font-size: 1.25rem;
  margin-top: -1.5rem;
  margin-left: 0.5rem;
  animation: ${fade} 0.75s ease normal;
`

const MottoMobile = styled.div`
  font-family: Futura;
  font-size: 1.2rem;
  animation: ${fade} 0.75s ease normal;
`

function Home() {
  const [ready, setReady] = React.useState(false)
  return (
    <MediaQuery minDeviceWidth={767}>
      {matches =>
        matches ? (
          <Container>
            <div>
              <Title>
                <Typing hideCursor speed={120} onFinishedTyping={() => setReady(true)}>
                  Hello,&nbsp;I&apos;m&nbsp;ymkz
                </Typing>
              </Title>
              {ready && (
                <Motto>------------&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;games,&nbsp;seriously</Motto>
              )}
            </div>
          </Container>
        ) : (
          <ContainerMobile>
            <TitleMobile>
              <Typing hideCursor speed={120}>
                Hello
              </Typing>
            </TitleMobile>
            <TitleMobile>
              <Typing hideCursor speed={120} startDelay={600}>
                I&apos;m
              </Typing>
            </TitleMobile>
            <TitleMobile>
              <Typing
                hideCursor
                speed={120}
                startDelay={960}
                onFinishedTyping={() => setReady(true)}
              >
                ymkz
              </Typing>
            </TitleMobile>
            {ready && (
              <MottoMobile>
                ------&nbsp;&nbsp;&nbsp;&nbsp;Play&nbsp;games,&nbsp;seriously
              </MottoMobile>
            )}
          </ContainerMobile>
        )
      }
    </MediaQuery>
  )
}

export default Home
