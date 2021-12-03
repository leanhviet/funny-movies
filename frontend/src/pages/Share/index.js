// Libs
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

// Components
import { Form, Col, Row, Button } from 'react-bootstrap'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Alert from '../../components/Alert'

// Helpers
import { getStorage } from '../../helpers/storage'
import { parseJwt } from '../../helpers/function'

// Constants
import { USER_KEY } from '../../constants/localStorage'

export const Share = (props) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [urlText, setUrlText] = useState('')
  const [userAccount, setUser] = useState()

  useEffect(() => {
    const token = getStorage(USER_KEY) || ''
    const { history } = props

    if (token) {
      const convertToken = parseJwt(token).email
      setUser(convertToken)
    } else {
      history.push('/login')
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!urlText) {
      setErrorMsg('Required!')

      return
    }

    const { history } = props

    if (!userAccount) {
      history.push('/login')
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userAccount,
        videoUrl: urlText
      })
    }

    fetch('http://localhost:4321/api/sharevideo', requestOptions)
      .then((response) => response.json())
      .then(() => {
        setSuccessMsg('Congrats to share a movie successfully!')
        setTimeout(() => {
          history.push('/')
        }, 3000)
      })
  }

  return (
    <>
      {errorMsg && (
        <Alert
          heading="Error!"
          variant="danger"
          message={errorMsg}
          onClose={() => setErrorMsg('')}
        />
      )}
      {successMsg && (
        <Alert
          heading="Successfully!"
          variant="success"
          message={successMsg}
          onClose={() => setSuccessMsg('')}
        />
      )}
      <Header />
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
              disabled={!!successMsg}
            >
              Share
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}

export default withRouter(Share)
