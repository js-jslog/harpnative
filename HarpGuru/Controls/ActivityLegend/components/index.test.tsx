import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../../testResources'

import { ActivityLegend } from './index'

test('A component is rendered with at least a degree and a pitch', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { C: rootPitchId } = PitchIds
  const activeDegreeIds = [ DegreeIds.Root ]
  const activePitchIds = [ PitchIds.C ]
  const activityLegendProps = {
    activeHarpStrata, setActiveHarpStrata,
    rootPitchId, activeDegreeIds, activePitchIds
  }

  const { getByText } = render(<ActivityLegend {...activityLegendProps} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(PitchIds.C)).toBeTruthy()
})
