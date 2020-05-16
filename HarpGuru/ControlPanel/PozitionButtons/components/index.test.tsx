import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { PozitionButtonsProps } from '../types'

import { PozitionButtons } from './index'

test('PozitionButtons renders a dom element with a \'Harp Position\' label', () => {
  const setPozitionId = jest.fn()
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }

  const { getByText } = render(<PozitionButtons {...pozitionButtonsProps } />)
  expect(getByText('Harp Position')).toBeTruthy()
})

test('PozitionButtons renders a first position button which calls the passed function parameter when clicked', () => {
  const setPozitionId = jest.fn()
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }

  const { getByText } = render(<PozitionButtons {...pozitionButtonsProps } />)

  expect(getByText(PozitionIds.First)).toBeTruthy()
  fireEvent(getByText(PozitionIds.First), new NativeTestEvent('press'))
  expect(setPozitionId.mock.calls.length).toBe(1)
})
