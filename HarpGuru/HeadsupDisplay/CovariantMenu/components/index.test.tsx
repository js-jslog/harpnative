import React from 'react'
import {PitchIds, PozitionIds, HarpStrataProps, ApparatusIds, ActiveIds, getHarpStrata} from 'harpstrata'
import {render} from '@testing-library/react-native'

import {DisplayModes} from '../../../HarpFace'

import { CovariantOptions } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const harpStrata = getHarpStrata(harpStrataProps)

test('CovariantOptions renders a component with position and key information displayed', () => {
  const hudContentProps = {
    activeHarpStrata: harpStrata,
    setActiveHarpStrata: jest.fn(),
    activeDisplayMode: DisplayModes.Degree,
  }
  const { getByText } = render(<CovariantOptions {...hudContentProps} />)

  expect(getByText(PitchIds.C)).toBeTruthy()
  expect(getByText(PitchIds.G)).toBeTruthy()
  expect(getByText(PozitionIds.Second)).toBeTruthy()
})
