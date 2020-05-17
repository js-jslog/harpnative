import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { ControlPanelProps } from '../types'

import { ControlPanel } from './index'


test('ControlPanel has a first Pozition control which calls it\'s parameterised function with it\'s expected identity when clicked', () => {
  const setPozitionId = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PozitionIds.First)).toBeTruthy()

  fireEvent(getByText(PozitionIds.First), new NativeTestEvent('press'))

  expect(setPozitionId.mock.calls.length).toBe(1)
  expect(setPozitionId.mock.calls[0][0]).toBe(PozitionIds.First)
})
