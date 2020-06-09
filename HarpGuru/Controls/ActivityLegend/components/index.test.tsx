import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { ActivityLegend } from './index'

test('A component is rendered with at least a degree and a pitch', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const { getByText } = render(<ActivityLegend {...activityLegendProps} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(PitchIds.C)).toBeTruthy()
})
