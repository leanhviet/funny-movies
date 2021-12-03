// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { InputComponent } from './index'

const props = {
  id: '123',
  type: 'text',
  className: 'input-fmt',
  name: 'input-txt',
  defaultValue: 'test',
  placeholder: 'Enter your email',
  disabled: false,
  size: 'lg',
  minlength: 8,
  required: false
}

describe('Input component', () => {
  const wrapper = shallow(<InputComponent />)
  const wrapperWithProps = shallow(<InputComponent {...props} />)

  it('should be defined Input component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Input component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // // Testing default props
  it('should be render defaultProps Input component', () => {
    expect(InputComponent.defaultProps.className).toEqual('')
    expect(InputComponent.defaultProps.type).toEqual('text')
    expect(InputComponent.defaultProps.defaultValue).toEqual('')
    expect(InputComponent.defaultProps.placeholder).toEqual('')
  })

  // // Testing mock props
  it('should be render mockProps Input component', () => {
    expect(wrapperWithProps.find('FormControl').props().className).toContain(
      props.className
    )
    expect(wrapperWithProps.find('FormControl').props().placeholder).toEqual(
      props.placeholder
    )
    expect(wrapperWithProps.find('FormControl').props().type).toEqual(
      props.type
    )
    expect(wrapperWithProps.find('FormControl').props().defaultValue).toEqual(
      props.defaultValue
    )
  })
})
