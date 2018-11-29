import styled from '@emotion/styled'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { colors } from 'src/helpers/constants'

const NavLink = styled(RouterNavLink)`
  color: ${colors.white.default};
  font-family: Futura;
  font-weight: 300;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`

export default NavLink
