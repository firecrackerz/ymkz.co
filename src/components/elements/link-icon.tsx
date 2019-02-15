import styled from '@emotion/styled'
import * as React from 'react'
import colors from '../../constants/colors'

interface Props {
  src: string
  href: string
  alt: string
}

export default function LinkIcon({ href, src, alt }: Props) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <img src={src} alt={alt} width={44} height={44} />
    </Link>
  )
}

const Link = styled.a`
  color: ${colors.white};
  height: 44px;
  width: 44px;
`
