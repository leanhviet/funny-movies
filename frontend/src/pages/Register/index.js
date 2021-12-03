// Libs
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

// Components
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Alert from '../../components/Alert'

// Helpers
import { getStorage } from '../../helpers/storage'

// Constants
import { USER_KEY } from '../../constants/localStorage'

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
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
    setErrorMsg('')

    if (!email || !pwd || !confirmPwd) {
      setErrorMsg('All of fields are required!')

      return
    }

    if (pwd !== confirmPwd) {
      setErrorMsg('Password does not matched!')

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
      const register = await fetch(
        'http://localhost:4321/api/auth/register',
        requestOptions
      )

      if (register && register.status === 200) {
        setSuccessMsg('Congrats to register successfully!')
        await setTimeout(() => {
          history.push('/login')
        }, 3000)
      } else {
        setErrorMsg('Email already exists')
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
      <Form
        style={{
          width: '1020px',
          margin: '10% auto',
          height: '580px',
          border: '3px solid rgba(0,0,0,.1)',
          padding: '70px 30px'
        }}
        onSubmit={onSubmit}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Register</h2>

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

        <Form.Group as={Row} className="mb-5">
          <Form.Label column sm={2}>
            Comfirm Password
          </Form.Label>
          <Col sm={10}>
            <Input
              type="password"
              size="lg"
              placeholder="Re-enter your password"
              onChange={(val) => setConfirmPwd(val.target.value)}
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
              Register
            </Button>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}

export default withRouter(Register)
