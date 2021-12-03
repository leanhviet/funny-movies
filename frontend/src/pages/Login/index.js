// Libs
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

// Components
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Alert from '../../components/Alert'

// Helpers
import { setStorage, getStorage } from '../../helpers/storage'

// Constants
import { USER_KEY } from '../../constants/localStorage'
const { REACT_APP_API_URL } = process.env

export const Login = (props) => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    const token = getStorage(USER_KEY)
    const { history } = props

    if (token) {
      history.push('/')
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!email || !pwd) {
      setErrorMsg('All of fields are required!')

      return
    }

    const { history } = props
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: (email || '').trim(),
        password: pwd
      })
    }

    try {
      const requestLogin = await fetch(
        `${REACT_APP_API_URL}/api/auth/login`,
        requestOptions
      )
      const newData = await requestLogin.json()

      if (newData.status === 200) {
        // set tokon to localStorage
        setStorage(USER_KEY, newData.token)

        setErrorMsg('')
        setSuccessMsg('Congrats to login successfully!')
        setTimeout(() => {
          history.push('/')
        }, 3000)
      } else {
        setErrorMsg(newData.message)
        return
      }
    } catch (error) {
      setErrorMsg(error)
    }
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
      <Form className="login-pg" onSubmit={onSubmit}>
        <h2 className="login-pg__title">Login</h2>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Input
              type="email"
              size="lg"
              placeholder="Enter your email"
              onChange={(val) => setEmail(val.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Input
              type="password"
              size="lg"
              placeholder="Enter your password"
              onChange={(val) => setPwd(val.target.value)}
              minlength={5}
              required={true}
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
              Login
            </Button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account? <Link to="/register">Create One</Link>
            </p>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}

export default withRouter(Login)
