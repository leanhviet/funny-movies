// Libs
import React from 'react'

// Components
import { Alert } from 'react-bootstrap'

export const AlertComponent = ({ onClose, heading, message, variant }) => (
  <Alert variant={variant} className="alert-cmp">
    <div>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{message}</p>
    </div>
    <span onClick={onClose} className="alert-cmp__closeBtn">
      <i className="fa fa-times" aria-hidden="true"></i>
    </span>
  </Alert>
)

AlertComponent.defaultProps = {
  heading: '',
  onClose: () => {},
  message: '',
  variant: ''
}

export default React.memo(AlertComponent)
