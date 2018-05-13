// @flow
import * as React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
  background-color: var(--nord1);
  border-radius: 4px;
  color: var(--nord6);
  font-size: 1.1rem;
  padding: 0.65rem;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px var(--nord1), 0 0 0 4px var(--nord2);
    outline: none;
  }
  &::placeholder {
    color: var(--nord3);
    font-size: 1rem;
  }
`

const TextArea = styled.textarea`
  background-color: var(--nord1);
  border-radius: 4px;
  color: var(--nord6);
  height: 12rem;
  padding: 0.65rem;
  resize: none;
  width: 100%;
  &:focus {
    box-shadow: inset 0 1px 2px var(--nord1), 0 0 0 4px var(--nord2);
    outline: none;
  }
  &::placeholder {
    color: var(--nord3);
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
