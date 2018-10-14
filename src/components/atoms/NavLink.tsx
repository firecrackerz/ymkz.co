import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { colors } from 'src/helpers/constants'

const NavLink = styled(RouterNavLink).attrs({
  activeStyle: { fontWeight: 700 }
})`
  color: ${colors.white};
  font-family: Futura;
  font-weight: 300;
`

export default NavLink
