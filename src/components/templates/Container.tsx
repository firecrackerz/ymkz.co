import * as React from 'react'
import { color, constraint } from 'src/constants'
import styled from 'styled-components'

const Container = ({ children }) => (
  <Wraper>
    <Content>{children}</Content>
  </Wraper>
)

export default Container

const Wraper = styled.div`
  background-color: ${color.black};
  color: ${color.white};
`

const Content = styled.main`
  margin: 0 auto;
  max-width: calc(${constraint.contentWidth} + ${constraint.mobilePadding} * 2);
  padding: 0 ${constraint.mobilePadding};
`
