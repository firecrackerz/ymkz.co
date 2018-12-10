import styled from '@emotion/styled'
import * as React from 'react'

interface Props {
  src: string
  href: string
  alt?: string
}

export default function LinkIcon({ href, src, alt }: Props) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Icon src={src} alt={alt} />
    </Link>
  )
}

const Link = styled('a')`
  color: #eceff4;
  height: 48px;
  width: 48px;
`

const Icon = styled('img')`
  height: 48px;
  width: 48px;
`
