// Libs
import React from 'react'
import { shallow } from 'enzyme'

// Components
import { VideoComponent } from './index'

const props = {
  id: 'XMNRRE11',
  title: 'Khoa Pug and Vuong Pham',
  sharedBy: 'vietla@gmail.com',
  likeCount: 12222,
  dislikeCount: 10,
  description: 'Johnny Dang lua dao chiem doat 30 ty'
}

describe('Video component', () => {
  const wrapper = shallow(<VideoComponent />)
  const wrapperWithProps = shallow(<VideoComponent {...props} />)

  it('should be defined Video component', () => {
    expect(wrapper).toBeDefined()
  })

  // Testing Snapshot
  it('should be render snapshot Video component', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithProps).toMatchSnapshot()
  })

  // Testing default props
  it('should be render defaultProps Video component', () => {
    expect(VideoComponent.defaultProps.id).toEqual('')
    expect(VideoComponent.defaultProps.title).toEqual('')
    expect(VideoComponent.defaultProps.sharedBy).toEqual('')
    expect(VideoComponent.defaultProps.likeCount).toEqual(0)
    expect(VideoComponent.defaultProps.dislikeCount).toEqual(0)
    expect(VideoComponent.defaultProps.description).toEqual('')
  })

  // Testing mock props
  it('should be render mockProps Input component', () => {
    expect(wrapperWithProps.find('iframe').props().src).toContain(
      props.id,
    )
    expect(wrapperWithProps.find('iframe').props().title).toEqual(
      props.title,
    )
    expect(wrapperWithProps.find('CardText').props().children).toEqual(
      props.description,
    )
  })
})
