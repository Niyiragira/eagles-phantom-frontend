import React from 'react'
import { shallow } from 'enzyme'


import App from './app'

describe('App', () => {
  test('should test initial message', () => {
    const wrapper = shallow(
      <App />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})