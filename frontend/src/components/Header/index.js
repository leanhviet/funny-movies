// Libs
import React from 'react'

// Components
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <h1>
            <i className="fa fa-home" aria-hidden="true"></i> Funny movies
          </h1>
        </Link>
        <div className="ml-auto">
          <Link to="/share">
            <Button variant="outline-success mr-2">Share a movie</Button>
          </Link>
          <Link to="/">
            <Button variant="outline-primary">Login / Register</Button>
          </Link>
        </div>
      </Navbar>
      <hr style={{ height: '1px' }} />
    </div>
  )
}

export default React.memo(HeaderComponent)
