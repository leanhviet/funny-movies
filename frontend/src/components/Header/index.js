// Libs
import React, { useEffect, useState } from 'react'

// Components
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Helpers
import { getStorage, removeStorage } from '../../helpers/storage'
import { parseJwt } from '../../helpers/function'

// Constants
import { USER_KEY } from '../../constants/localStorage'

export const HeaderComponent = () => {
  const [userAccount, setUser] = useState()

  useEffect(() => {
    const token = getStorage(USER_KEY) || ''

    if (token) {
      const convertToken = parseJwt(token).email
      setUser(convertToken)
    }
  }, [])

  const onLogout = () => {
    setUser('')
    removeStorage(USER_KEY)
  }

  return (
    <div className="header-cmp">
      <Navbar className="header-cmp__wrap" bg="light" expand="lg">
        <Link className="header-cmp__wrap__logo" to="/">
          <h1>
            <i className="fa fa-home" aria-hidden="true"></i> Funny movies
          </h1>
        </Link>
        <div className="ml-auto header-cmp__wrap__btn-grp">
          {userAccount && (
            <div className="btn-grp-wrap">
              <h5 className="btn-grp-wrap__title">Welcome: {userAccount}</h5>
              <>
                <Link to="/share">
                  <Button variant="outline-success mr-2">Share a movie</Button>
                </Link>

                <Button variant="outline-danger mr-2" onClick={onLogout}>
                  Logout
                </Button>
              </>
            </div>
          )}

          {!userAccount && (
            <Link to="/login">
              <Button variant="outline-primary">Login / Register</Button>
            </Link>
          )}
        </div>
      </Navbar>
      <hr className="header-cmp__line" />
    </div>
  )
}

export default React.memo(HeaderComponent)
