import styled from '@emotion/styled'
import constraints from '../../constants/constraints'

export default styled.div`
  padding-bottom: 96px;
  @media (max-width: ${constraints.headerHeightPx}) {
    padding-bottom: 64px;
  }
`
