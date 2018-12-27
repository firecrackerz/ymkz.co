import styled from '@emotion/styled/macro'
import { constraints } from '../../constants'

export default styled('div')`
  padding-bottom: 96px;
  @media (max-width: ${constraints.headerHeightPx}) {
    padding-bottom: 64px;
  }
`
