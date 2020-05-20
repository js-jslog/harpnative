import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import type { PitchButtonProps } from '../types'
import { keyCHarpStrata, keyDHarpStrata } from '../testResources'

import { PitchButton } from './index'

test('PitchButton renders a component with the parameter label on it', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyDHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: PitchButtonProps = { id, activeHarpStrata, setActiveHarpStrata }

  const { getByText } = render(<PitchButton {...pitchButtonProps} />)

  expect(getByText(id)).toBeTruthy()
})

test('PitchButton renders a component which set\'s the expected harp strata to the paramaterised function', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyDHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: PitchButtonProps = { id, activeHarpStrata, setActiveHarpStrata }

  const { getByText } = render(<PitchButton {...pitchButtonProps} />)

  fireEvent(getByText(id), new NativeTestEvent('press'))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(keyCHarpStrata)
})

test('PitchButton renders a disabled component if it\'s id matches the active harp pitch', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const { C: id } = PitchIds

  const pitchButtonProps: PitchButtonProps = { id, activeHarpStrata, setActiveHarpStrata }

  const { getByText } = render(<PitchButton {...pitchButtonProps} />)

  fireEvent(getByText(id), new NativeTestEvent('press'))

  expect(setActiveHarpStrata.mock.calls.length).toBe(0)
})
