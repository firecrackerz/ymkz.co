import styled from '@emotion/styled'

interface Props {
  orientation: 'landscape' | 'portrait'
}

export default styled.img`
  border: 1px solid #4c566a;
  width: ${({ orientation }: Props) => (orientation === 'landscape' ? 256 : 128)}px;
`
