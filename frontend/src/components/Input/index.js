// @flow
import React from 'react'

// Components
import { Form } from 'react-bootstrap'

export const InputComponent = ({
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
  size,
  minlength,
  required = false
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
    minlength={minlength}
    required={required}
  />
)

InputComponent.defaultProps = {
  type: 'text',
  name: '',
  onBlur: () => {},
  onChange: () => {},
  defaultValue: '',
  placeholder: '',
  className: ''
}

export default React.memo(InputComponent)
