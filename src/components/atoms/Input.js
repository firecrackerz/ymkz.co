// @flow
import * as React from 'react'
import styled from 'styled-components'
import { color } from '~/constants'

const TextInput = styled.input`
  background-color: ${color.darkBlack};
  border-radius: 4px;
  color: ${color.white};
  font-size: 1.1rem;
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

const Input = ({
  type,
  name,
  placeholder,
  value,
  handleBlur,
  handleChange
}: {
  type: 'input' | 'textarea',
  name: string,
  placeholder: string,
  value: string,
  handleBlur: Function,
  handleChange: Function
}) => (
  <>
    {type === 'input' ? (
      <TextInput
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    ) : (
      <TextArea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    )}
  </>
)

export default Input
