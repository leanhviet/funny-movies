// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Login } from './index'

describe('Login page', () => {
  const wrapper = shallow(<Login />)

  it('should be defined Login page', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Login page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
