import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../../testResources'

import { ActivityLegendCell } from './index'

test('A component is rendered displaying a DegreeIds itemId', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: DegreeIds.Root,
    activeIds: [ DegreeIds.Root ]
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
})

test('A component is rendered displaying a PitchIds itemId', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: PitchIds.C,
    activeIds: [ PitchIds.C ]
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(PitchIds.C)).toBeTruthy()
})
