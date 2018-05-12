import React from 'react'
import { shallow } from 'enzyme'
import ExampleComponent from './ExampleComponent'

describe('<ExampleComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<ExampleComponent />)

    expect(wrapper).toBeDefined()
  })
})
