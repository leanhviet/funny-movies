// @flow
import React from 'react'

// Components
import { Form } from 'react-bootstrap'

const InputComponent = ({
  id,
  type,
  className,
  name,
  defaultValue,
  placeholder,
  disabled,
  inputRef,
  onBlur,
  onChange,
  size
}) => (
  <Form.Control
    id={id}
    name={name}
    type={type}
    className={`form-control ${className}`}
    defaultValue={defaultValue}
    ref={inputRef}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    size={size}
  />
)

export default React.memo(InputComponent)
