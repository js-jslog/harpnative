/**
 * @format
 */

import 'react-native'
import renderer from 'react-test-renderer'
import React from 'react'

import App from '../App'

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />)
})
