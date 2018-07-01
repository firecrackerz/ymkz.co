import { Location } from 'history'
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import Heading from 'src/components/molecules/Heading'
import Navigation from 'src/components/molecules/Navigation'
import { constraint } from 'src/constants'
import styled from 'styled-components'

interface Props {
  location: Location
}

const Header = ({ location }: Props) => (
  <Container>
    <Heading />
    <Navigation pathname={location.pathname} />
  </Container>
)

export default withRouter(Header)

const Container = styled.header`
  display: flex;
  align-items: center;
  height: ${constraint.headerHeight};
  justify-content: space-between;
`
