import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { ActivityLegendCell } from './index'

test('A component is rendered displaying a DegreeIds itemId', () => {
  const activityLegendCell = {
    itemId: DegreeIds.Root
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
})

test('A component is rendered displaying a PitchIds itemId', () => {
  const activityLegendCell = {
    itemId: PitchIds.C
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(PitchIds.C)).toBeTruthy()
})
