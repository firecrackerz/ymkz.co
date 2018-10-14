import styled from 'styled-components'

interface Props {
  space?: number
}

const Row = styled.div<Props>`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${props => props.space}px;
  }
`

export default Row
