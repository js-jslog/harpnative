import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { PozitionButtonProps } from '../types'

import { PozitionButton } from './index'

test('PozitionButton renders a component with the parameter label on it', () => {
  const { First: id } = PozitionIds
  const setPozitionId = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { id, setPozitionId }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)

  expect(getByText(id)).toBeTruthy()
})

test('PozitionButton renders a component which calls a paramaterised function with it\' identity when clicked', () => {
  const { First: id } = PozitionIds
  const setPozitionId = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { id, setPozitionId }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)

  fireEvent(getByText(id), new NativeTestEvent('press'))

  expect(setPozitionId.mock.calls.length).toBe(1)
  expect(setPozitionId.mock.calls[0][0]).toBe(id)
})
