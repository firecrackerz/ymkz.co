import styled from '@emotion/styled/macro'
import { NavLink } from 'react-navi'
import { colors } from '../../constants'

export default styled(NavLink)`
  color: ${colors.white};
  font-family: 'Jost*';
  font-weight: ${props => (props.href === '/' ? 700 : 300)};
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
  &.activeNavLink {
    cursor: auto;
    font-weight: bold;
    text-decoration-line: none;
  }
`
