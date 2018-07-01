import * as React from 'react'
import { Link } from 'react-router-dom'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Title = ({ children }: Props) => <Container to="/">{children}</Container>

export default Title

const Container = styled(Link)`
  color: ${color.white};
  font-family: 'Futura';
  font-weight: 700;
`
