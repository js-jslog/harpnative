import { render, fireEvent } from 'react-native-testing-library'
import React from 'react'

import { DisplayModeTogglerProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

import { DisplayModeToggler } from './index'

test('DisplayModeToggler renders a component with \'Display mode\' title', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByA11yLabel } = render(<DisplayModeToggler {...displayModeTogglerProps} />)

  expect(getByA11yLabel('Display mode')).toBeTruthy()
})

test('DisplayModeToggler renders a component with both \'Degree\' and \'Pitch\' buttons', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByA11yLabel } = render(<DisplayModeToggler {...displayModeTogglerProps} />)


  expect(getByA11yLabel(DisplayModes.Degree)).toBeTruthy()
  expect(getByA11yLabel(DisplayModes.Pitch)).toBeTruthy()
})

test('DisplayModeToggler Degree button calls a paramaterised function with it\'s identity when it is clicked', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByA11yLabel } = render(<DisplayModeToggler {...displayModeTogglerProps} />)

  fireEvent.press(getByA11yLabel(DisplayModes.Degree))

  expect(setDisplayMode.mock.calls.length).toBe(1)
  expect(setDisplayMode.mock.calls[0][0]).toBe(DisplayModes.Degree)
})
