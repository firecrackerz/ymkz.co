import styled from '@emotion/styled'
import constraints from '../../constants/constraints'

export default styled.h1`
  font-family: 'Jost';
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0;
  @media (max-width: ${constraints.mobileWidthPx}) {
    font-size: 2.8rem;
  }
`
