// Libs
import React, { useState } from 'react'
import { withRouter } from 'react-router'

// Components
import { Form, Col, Row, Button } from 'react-bootstrap'
import Input from '../../components/Input'

const Share = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [urlText, setUrlText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!urlText) {
      setErrorMsg('Required')

      return
    }

    const { history } = props
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'leanhviet24495@gmail.com',
        videoUrl: urlText
      })
    }

    fetch('http://localhost:4321/api/sharevideo', requestOptions)
      .then((response) => response.json())
      .then(() => {
        history.push('/')
      })
  }

  return (
    <Form
      style={{
        width: '780px',
        margin: '10% auto',
        height: '300px',
        border: '3px solid rgba(0,0,0,.1)',
        padding: '70px 30px'
      }}
      onSubmit={onSubmit}
    >
      <Form.Group as={Row} controlId="formHorizontalEmail" className="mb-5">
        <Form.Label column sm={2}>
          Youtube URL
        </Form.Label>
        <Col sm={10}>
          <Input
            type="text"
            size="lg"
            placeholder="Enter youtube URL"
            onChange={(val) => setUrlText(val.target.value)}
          />
          {errorMsg && <p style={{ color: 'red' }}>Required*</p>}
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            block
            className="w-100"
          >
            Share
          </Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default withRouter(Share)
