import React from 'react'
import { PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { UpdateCategories } from '../types'
import type { GenericUpdateProps } from '../types'
import { keyCHarpStrata } from '../testResources'

import { GenericUpdateButton } from './index'

test('GenericButton renders a component with the parameter label on it', () => {
  const activeHarpStrata = keyCHarpStrata

  const { HarpKey: updateCategory } = UpdateCategories
  const { C: updateId } = PitchIds
  const harpKeyUpdateProps: GenericUpdateProps = { activeHarpStrata, updateCategory, updateId }

  const { getByText } = render(<GenericUpdateButton {...harpKeyUpdateProps} />)

  expect(getByText(updateId)).toBeTruthy()
})
