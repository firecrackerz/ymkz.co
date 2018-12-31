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
  &.active {
    cursor: auto;
    font-weight: 700;
    pointer-events: none;
    text-decoration-line: none;
  }
`
