// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { AlertComponent } from './index'

const mockFn = jest.fn()
const props = {
  onClose: mockFn,
  heading: 'Error',
  message: 'All of fields are required',
  variant: 'danger'
}

describe('Alert component', () => {
  const wrapper = shallow(<AlertComponent />)
  const wrapperWithProps = shallow(<AlertComponent {...props} />)

  it('should be defined Alert component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Alert component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // // Testing default props
  it('should be render defaultProps Alert component', () => {
    expect(AlertComponent.defaultProps.heading).toEqual('')
    expect(AlertComponent.defaultProps.message).toEqual('')
    expect(AlertComponent.defaultProps.variant).toEqual('')
    expect(AlertComponent.defaultProps.onClose()).toBeUndefined()
  })

  // Testing mock props
  it('should be render mockProps Button component', () => {
    expect(wrapperWithProps.find('Alert').props().variant).toEqual(
      props.variant,
    )
    expect(wrapperWithProps.find('AlertHeading').props().children).toEqual(
      props.heading,
    )
    expect(wrapperWithProps.find('p').props().children).toEqual(
      props.message,
    )
  })

  // Testing for action click
  it('behavior Alert component', () => {
    wrapperWithProps.find('span').simulate('click', {})
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
