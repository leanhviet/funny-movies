// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { NotFound } from './index'

describe('NotFound page', () => {
  const wrapper = shallow(<NotFound />)

  it('should be defined NotFound page', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot NotFound page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
