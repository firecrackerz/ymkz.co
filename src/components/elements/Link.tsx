import styled from '@emotion/styled/macro'
import * as React from 'react'
import { colors } from '../../constants'

interface Props {
  href: string
  children: React.ReactChild
}

export default function Link(props: Props) {
  return (
    <Anchor href={props.href} rel="noopener noreferrer" target="_blank">
      {props.children}
    </Anchor>
  )
}

const Anchor = styled('a')`
  color: ${colors.white};
  line-height: 1.5;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
`
