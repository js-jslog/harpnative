import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react-native'

import { keyCHarpStrata, cHarpSecondPozHarpStrata, gHarpFirstPozHarpStrata  } from '../../testResources'
import { DisplayModes } from '../../../HarpFace'

import { ActivityLegendCell } from './index'

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity', () => 'TouchableOpacity')

test('A component is rendered displaying a DegreeIds itemId', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: DegreeIds.Root,
    activeIds: [ DegreeIds.Root ],
    activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
})

test('A component is rendered displaying a PitchIds itemId', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: PitchIds.C,
    activeIds: [ PitchIds.C ],
    activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(PitchIds.C)).toBeTruthy()
})

test('A click calls setActiveHarpStrata with the expected new harpstrata, shifting pozition to achieve target root pitch when in degree display mode', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Degree: activeDisplayMode } = DisplayModes
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: PitchIds.G,
    activeIds: [ PitchIds.C ],
    activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)

  fireEvent.press(getByText(PitchIds.G))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(cHarpSecondPozHarpStrata)
})

test('A click calls setActiveHarpStrata with the expected new harpstrata, shifting harp key to achieve target root pitch when in pitch display mode', () => {
  const activeHarpStrata = keyCHarpStrata
  const setActiveHarpStrata = jest.fn()
  const { Pitch: activeDisplayMode } = DisplayModes
  const activityLegendCell = {
    activeHarpStrata,
    setActiveHarpStrata,
    itemId: PitchIds.G,
    activeIds: [ PitchIds.C ],
    activeDisplayMode
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)

  fireEvent.press(getByText(PitchIds.G))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(gHarpFirstPozHarpStrata)
})
