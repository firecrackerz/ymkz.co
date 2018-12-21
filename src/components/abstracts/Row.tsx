import styled from '@emotion/styled/macro'

export default styled('div')`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  & > *:not(:last-child) {
    margin-right: ${(props: { space?: number }) => (props.space ? props.space : 0)}px;
  }
`
