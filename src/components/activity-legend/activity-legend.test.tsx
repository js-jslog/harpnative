import React from 'react'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { ActivityLegend } from './activity-legend'

test('ActivityLegend renders a component with scale degrees listed', () => {
  const { getByText } = render(<ActivityLegend />)

  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(DegreeIds.Third)).toBeTruthy()
  expect(getByText(DegreeIds.Fourth)).toBeTruthy()
  expect(getByText(DegreeIds.Sixth)).toBeTruthy()
  expect(getByText(DegreeIds.Seventh)).toBeTruthy()
})
