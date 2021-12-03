// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Register } from './index'

describe('Register page', () => {
  const wrapper = shallow(<Register />)

  it('should be defined Register page', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Register page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
