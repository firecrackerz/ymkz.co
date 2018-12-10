import styled from '@emotion/styled'

interface Props {
  space?: number
}

export default styled('div')`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${(props: Props) => (props.space ? props.space : 0)}px;
  }
`
