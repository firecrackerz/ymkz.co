import React from 'react'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'
import constraints from '../constants/constraints'
import Layout from '../components/abstracts/layout'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: calc(100vh - ${constraints.headerHeightPx});
  margin: 0 auto;
  max-width: ${constraints.mobileWidthPx};
  padding: 0 16px ${constraints.headerHeightPx};
  @media (max-width: ${constraints.mobileWidthPx}) {
    justify-content: flex-start;
    padding: 64px 16px 0;
  }
`

const Greeting = styled.h1`
  font-family: 'Jost';
  font-size: 7rem;
  font-weight: 900;
  margin: 0;
  @media (max-width: ${constraints.mobileWidthPx}) {
    font-size: 7rem;
    line-height: 1;
  }
`

const Message = styled.p`
  font-family: 'Jost';
  font-size: 1.4rem;
  font-weight: 300;
  margin: 0;
  margin-left: 0.5rem;
  margin-top: -1.25rem;
  @media (max-width: ${constraints.mobileWidthPx}) {
    font-size: 1.2rem;
    margin-left: 0;
    margin-top: 1.75rem;
  }
`

export default function Home() {
  return (
    <Layout>
      <Container>
        <Greeting>
          Hi,&nbsp;
          <MediaQuery query={`(max-width: ${constraints.mobileWidthPx})`}>
            <br />
          </MediaQuery>
          I&apos;m&nbsp;
          <MediaQuery query={`(max-width: ${constraints.mobileWidthPx})`}>
            <br />
          </MediaQuery>
          ymkz
        </Greeting>
        <Message>----- Play games, seriously</Message>
      </Container>
    </Layout>
  )
}
