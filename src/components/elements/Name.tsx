import styled from '@emotion/styled/macro'
import { constraints } from '../../constants'

export default styled('h1')`
  font-family: 'Jost';
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0;
  @media (max-width: ${constraints.headerHeightPx}) {
    font-size: 2.8rem;
  }
`
