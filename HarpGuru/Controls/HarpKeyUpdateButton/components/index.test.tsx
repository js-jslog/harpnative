import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { HarpKeyButtonProps } from '../types'
import { keyCHarpStrata, keyDHarpStrata } from '../testResources'

import { HarpKeyUpdateButton } from './index'

test('HarpKeyUpdateButton renders a component with the parameter label on it', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyDHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: HarpKeyButtonProps = {
    id, activeHarpStrata, setActiveHarpStrata
  }

  const { getByText } = render(<HarpKeyUpdateButton {...pitchButtonProps} />)

  expect(getByText(id)).toBeTruthy()
})

test('HarpKeyUpdateButton renders a component which set\'s the expected harp strata to the paramaterised function', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyDHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: HarpKeyButtonProps = {
    id, activeHarpStrata, setActiveHarpStrata
  }

  const { getByText } = render(<HarpKeyUpdateButton {...pitchButtonProps} />)

  fireEvent(getByText(id), new NativeTestEvent('press'))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(keyCHarpStrata)
})

test('HarpKeyUpdateButton renders a disabled component if it\'s id matches the active harp pitch', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: HarpKeyButtonProps = {
    id, activeHarpStrata, setActiveHarpStrata
  }

  const { getByText } = render(<HarpKeyUpdateButton {...pitchButtonProps} />)

  fireEvent(getByText(id), new NativeTestEvent('press'))

  expect(setActiveHarpStrata.mock.calls.length).toBe(0)
})
