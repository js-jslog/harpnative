import { Text } from 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'

import {DisplayModes} from '../../../HarpFace'

import {SwipeControlWrapper} from './index'


test('The SwipeControlWrapper renders the children passed to it', () => {
  const { Pitch: activeDisplayMode } = DisplayModes
  const setActiveDisplayMode = jest.fn()
  const swipeControlWrapperProps = { setActiveDisplayMode, activeDisplayMode }

  const { getByText } = render(<SwipeControlWrapper {...swipeControlWrapperProps}><Text>Wrapped component</Text></SwipeControlWrapper>)

  expect(getByText('Wrapped component')).toBeTruthy()
})
