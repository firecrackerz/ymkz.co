import styled from 'styled-components'
import { colors } from 'src/helpers/constants'

enum FontSize {
  large = '1.15rem',
  subtitle = '1.6rem',
  title = '4.5rem'
}

enum FontWeight {
  bold = 700,
  thin = 300
}

enum FontFamily {
  futura = 'Futura'
}

interface TextProps {
  size?: 'large' | 'subtitle' | 'title'
  weight?: 'bold' | 'thin'
  family?: 'futura'
}

const Text = styled.p<TextProps>`
  color: ${colors.white};
  font-family: ${props => props.family && FontFamily[props.family]};
  font-size: ${props => props.size && FontSize[props.size]};
  font-weight: ${props => props.weight && FontWeight[props.weight]};
`

export default Text
