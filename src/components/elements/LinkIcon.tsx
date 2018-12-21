import styled from '@emotion/styled'
import * as React from 'react'
import { colors } from '../../constants'

interface Props {
  src: string
  href: string
}

export default function LinkIcon(props: Props) {
  return (
    <Link href={props.href} rel="noopener noreferrer" target="_blank">
      <Icon src={props.src} alt="" />
    </Link>
  )
}

const Link = styled('a')`
  color: ${colors.white};
  height: 36px;
  width: 36px;
`

const Icon = styled('img')`
  height: 36px;
  width: 36px;
`
