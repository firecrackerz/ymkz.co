import * as React from 'react'
import { color } from 'src/constants'
import styled from 'styled-components'

interface Props
  extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: 'input' | 'textarea'
}

const FormField = ({ type, ...attributes }: Props) => (
  <React.Fragment>
    {type === 'input' ? (
      <Input {...attributes} />
    ) : (
      <TextArea {...attributes} />
    )}
  </React.Fragment>
)

export default FormField

const Input = styled.input`
  background-color: ${color.darkBlack};
  border-radius: 4px;
  color: ${color.white};
  padding: 0.65rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px ${color.darkBlack},
      0 0 0 4px ${color.middleBlack};
    outline: none;
  }
  &::placeholder {
    color: ${color.lightBlack};
    font-size: 1rem;
  }
`

const TextArea = styled.textarea`
  background-color: ${color.darkBlack};
  border-radius: 4px;
  color: ${color.white};
  height: 12rem;
  padding: 0.65rem;
  resize: none;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px ${color.darkBlack},
      0 0 0 4px ${color.middleBlack};
    outline: none;
  }
  &::placeholder {
    color: ${color.lightBlack};
  }
`
