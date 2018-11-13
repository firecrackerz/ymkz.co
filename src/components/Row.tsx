import styled from 'react-emotion'

interface Props {
  space?: number
}

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${(props: Props) => (props.space ? props.space : 0)}px;
  }
`

export default Row
