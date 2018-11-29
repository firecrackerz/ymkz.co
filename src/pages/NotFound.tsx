import styled from '@emotion/styled'
import * as React from 'react'
import NavLink from 'src/components/NavLink'

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
  font-size: 1.25rem;
  font-weight: 700;
`

const Message = styled('div')`
  font-family: Futura;
  font-size: 1rem;
  font-weight: 300;
`

export default function NotFound() {
  React.useEffect(() => {
    const title = document.title
    document.title = '404 Not Found YMKZ | Portfolio'
    return () => (document.title = title)
  })

  return (
    <Container>
      <div>
        <Title>404 Not Found</Title>
        <Message>
          ←back&nbsp;to&nbsp;<NavLink to="/">home</NavLink>.
        </Message>
      </div>
    </Container>
  )
}
