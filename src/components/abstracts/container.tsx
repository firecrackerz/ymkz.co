import styled from '@emotion/styled'
import constraints from '../../constants/constraints'

export default styled.div`
  margin: 0 auto;
  max-width: 767px;
  padding: 96px 16px;
  @media (max-width: ${constraints.headerHeightPx}) {
    padding: 64px 16px;
  }
`
