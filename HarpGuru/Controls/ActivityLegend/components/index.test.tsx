import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { ActivityLegend } from './index'

test('A component is rendered with at least a degree and a pitch', () => {
  const { getByText } = render(<ActivityLegend />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(PitchIds.C)).toBeTruthy()
})
