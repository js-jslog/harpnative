import React from 'react'
import {PitchIds, PozitionIds, HarpStrataProps, ApparatusIds, ActiveIds, getHarpStrata} from 'harpstrata'
import {render} from '@testing-library/react-native'

import {DisplayModes} from '../../../HarpFace'

import { RootPitchOption } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const harpStrata = getHarpStrata(harpStrataProps)

test('RootPitchOption renders a component with root pitch information displayed', () => {
  const menuOptionProps = {
    activeHarpStrata: harpStrata,
    setActiveHarpStrata: jest.fn(),
    activeDisplayMode: DisplayModes.Degree,
    setActiveDisplayMode: jest.fn()
  }
  const { getByText } = render(<RootPitchOption {...menuOptionProps} />)

  expect(getByText(PitchIds.G)).toBeTruthy()
})
