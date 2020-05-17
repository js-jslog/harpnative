import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { ControlPanelProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

import { ControlPanel } from './index'


test('ControlPanel has a first Pozition control which calls it\'s parameterised function with it\'s expected identity when pressed', () => {
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PozitionIds.First)).toBeTruthy()

  fireEvent(getByText(PozitionIds.First), new NativeTestEvent('press'))

  expect(setPozitionId.mock.calls.length).toBe(1)
  expect(setPozitionId.mock.calls[0][0]).toBe(PozitionIds.First)
})

test('ControlPanel has a DisplayModeToggler Degreee button which calls it\'s parameterised function with it\'s identity when pressed', () => {
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(DisplayModes.Degree)).toBeTruthy()

  fireEvent(getByText(DisplayModes.Degree), new NativeTestEvent('press'))

  expect(setDisplayMode.mock.calls.length).toBe(1)
  expect(setDisplayMode.mock.calls[0][0]).toBe(DisplayModes.Degree)
})
