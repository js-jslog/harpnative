import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { ActivityLegendColumn } from './index'

test('A component is rendered with DegreeIds', () => {
  const { Root: originId } = DegreeIds
  const activeIds = [ DegreeIds.Root ]
  const activityLegendColumnProps = { originId, activeIds }
  const { getByText } = render(<ActivityLegendColumn {...activityLegendColumnProps} />)

  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(DegreeIds.Third)).toBeTruthy()
})

test('A component is rendered with PitchIds', () => {
  const { C: originId } = PitchIds
  const activeIds = [ PitchIds.C ]
  const activityLegendColumnProps = { originId, activeIds }
  const { getByText } = render(<ActivityLegendColumn {...activityLegendColumnProps} />)

  expect(getByText(PitchIds.C)).toBeTruthy()
  expect(getByText(PitchIds.Eb)).toBeTruthy()
})
