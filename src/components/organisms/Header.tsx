import * as React from 'react'
import * as Routes from 'src/routes'
import styled from 'styled-components'
import { isActive } from 'src/helpers/functions'
import Row from 'src/components/templates/Row'
import NavLink from 'src/components/atoms/NavLink'
import Text from 'src/components/atoms/Text'

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: space-between;
`

const Header = () => (
  <Container>
    <Row space={4}>
      <NavLink to="/" onMouseOver={Routes.About.load}>
        ymkz
      </NavLink>
      <Text size="small" family="futura" weight="thin">
        is frontend engineer
      </Text>
    </Row>
    <Row space={16}>
      <NavLink to="/about" isActive={isActive('/about')} onMouseOver={Routes.About.load}>
        about
      </NavLink>
      <NavLink to="/work" isActive={isActive('/work')} onMouseOver={Routes.Work.load}>
        work
      </NavLink>
    </Row>
  </Container>
)

export default Header
