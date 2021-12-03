// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { App } from './index'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should be defined App', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot App', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
