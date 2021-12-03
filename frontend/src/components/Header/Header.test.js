// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { HeaderComponent } from './index'

describe('Header component', () => {
  const wrapper = shallow(<HeaderComponent />)

  it('should be defined Alert component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Alert component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
