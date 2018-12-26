import styled from '@emotion/styled/macro'
import * as React from 'react'
import { colors } from '../../constants'

interface Props {
  src: string
  href: string
  alt: string
}

export default function LinkIcon({ href, src, alt }: Props) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Icon src={src} alt={alt} />
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
