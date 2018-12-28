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
      <img src={src} alt={alt} width={36} height={36} />
    </Link>
  )
}

const Link = styled('a')`
  color: ${colors.white};
  height: 36px;
  width: 36px;
`
