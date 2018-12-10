import styled from '@emotion/styled'
import * as React from 'react'

export default function NotFound() {
  React.useEffect(() => {
    const title = document.title
    document.title = '404 | Not Found'
    return () => (document.title = title)
  })

  return (
    <Container>
      <Title>404&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Not Found</Title>
    </Container>
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
  font-family: 'Renner*';
  font-size: 1.25rem;
  font-weight: 300;
`
