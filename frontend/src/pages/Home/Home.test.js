// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Home } from './index'

describe('Home component', () => {
  const wrapper = shallow(<Home />)

  it('should be defined Home component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Home component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
