import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { ActivityLegendColumn } from './index'

test('A component is rendered with DegreeIds', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Root: originId } = DegreeIds
  const activeIds = [ DegreeIds.Root ]
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendColumnProps = {
    activeHarpStrata, setActiveHarpStrata,
    originId, activeIds, activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendColumn {...activityLegendColumnProps} />)

  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(DegreeIds.Third)).toBeTruthy()
})

test('A component is rendered with PitchIds', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { C: originId } = PitchIds
  const activeIds = [ PitchIds.C ]
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendColumnProps = {
    activeHarpStrata, setActiveHarpStrata,
    originId, activeIds, activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendColumn {...activityLegendColumnProps} />)

  expect(getByText(PitchIds.C)).toBeTruthy()
  expect(getByText(PitchIds.Eb)).toBeTruthy()
})
