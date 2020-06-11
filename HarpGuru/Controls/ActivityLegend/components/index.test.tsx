import React from 'react'
import { getHarpStrata, DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrataProps } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { ActivityLegend } from './index'

const activatedHarpStrataProps = { ...keyCHarpStrataProps, activeIds: [DegreeIds.Root, DegreeIds.Third, DegreeIds.Fifth] }
const activeHarpStrata = getHarpStrata(activatedHarpStrataProps)
const setActiveHarpStrata = jest.fn()

test('A component is rendered with at least a degree and a pitch', () => {
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const { getByText } = render(<ActivityLegend {...activityLegendProps} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
  expect(getByText(PitchIds.C)).toBeTruthy()
})

test('A snapshot of the legend in degree mode with some active degrees', () => {
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const { container } = render(<ActivityLegend {...activityLegendProps} />)
  expect(container).toMatchSnapshot()
})

test('A snapshot of the legend in pitch mode with some active degrees', () => {
  const { Pitch: activeDisplayMode } = DisplayModes
  const activityLegendProps = { activeHarpStrata, setActiveHarpStrata, activeDisplayMode }

  const { container } = render(<ActivityLegend {...activityLegendProps} />)
  expect(container).toMatchSnapshot()
})
