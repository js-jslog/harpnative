import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent } from '@testing-library/react-native'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'
import { keyCHarpStrata, keyDHarpStrata } from '../testResources'

import { GenericUpdateButton } from './index'

test('GenericUpdateButton renders a component with the parameter label on it', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { HarpKey: updateCategory } = UpdateCategories
  const { C: updateId } = PitchIds

  const harpKeyUpdateProps: GenericUpdateProps = {
    activeHarpStrata, setActiveHarpStrata, updateCategory, updateId
  }

  const { getByText } = render(<GenericUpdateButton {...harpKeyUpdateProps} />)

  expect(getByText(updateId)).toBeTruthy()
})

test('GenericUpdateButton renders a component which set\'s the expected harp strata to the paramaterised function', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyDHarpStrata
  const { HarpKey: updateCategory } = UpdateCategories
  const { C: updateId } = PitchIds

  const harpKeyUpdateProps: GenericUpdateProps = {
    activeHarpStrata, setActiveHarpStrata, updateCategory, updateId
  }

  const { getByText } = render(<GenericUpdateButton {...harpKeyUpdateProps} />)

  fireEvent(getByText(updateId), new NativeTestEvent('press'))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(keyCHarpStrata)
})
