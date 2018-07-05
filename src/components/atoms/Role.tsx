import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Profile = ({ children }: Props) => <Container>{children}</Container>

export default Profile

const Container = styled.small`
  color: ${color.white};
  font-family: 'Futura';
  font-weight: 300;
  margin-left: 4px;
`
