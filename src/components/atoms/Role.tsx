import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactChild
}

const Profile = ({ children }: Props) => <Container>{children}</Container>

export default Profile

const Container = styled.small`
  margin-left: 4px;
  font-family: 'Futura';
  font-weight: 300;
`
