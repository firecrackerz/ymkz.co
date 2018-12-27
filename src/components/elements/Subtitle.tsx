import styled from '@emotion/styled/macro'
import { constraints } from '../../constants'

export default styled('h2')`
  font-family: 'Jost*';
  font-size: 1.4rem;
  font-weight: 700;
  margin: -1rem 0 1rem;
  @media (max-width: ${constraints.headerHeightPx}) {
    font-size: 1.2rem;
    margin: -0.5rem 0 1rem;
  }
`
