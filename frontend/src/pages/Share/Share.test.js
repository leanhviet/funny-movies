// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Share } from './index'

describe('Share page', () => {
  const wrapper = shallow(<Share />)

  it('should be defined Share page', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Share page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
