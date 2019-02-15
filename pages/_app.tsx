import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import GlobalStyle from '../src/components/abstracts/global-style'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>YMKZ</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
