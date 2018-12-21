import styled from '@emotion/styled'

export default styled('img')`
  border: 1px solid #4c566a;
  width: ${({ orientation }: { orientation: 'landscape' | 'portrait' }) =>
    orientation === 'landscape' ? 256 : 128}px;
`
