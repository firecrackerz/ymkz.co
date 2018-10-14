import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

const Link = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank'
})`
  color: ${colors.white};
`

export default Link
