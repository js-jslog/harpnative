import React from 'react'
import {PitchIds, PozitionIds, HarpStrataProps, ApparatusIds, ActiveIds, getHarpStrata} from 'harpstrata'
import {render} from '@testing-library/react-native'

import {DisplayModes} from '../../../../HarpFace'

import { ApparatusOption } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const harpStrata = getHarpStrata(harpStrataProps)

test('ApparatusOption renders a component with apparatus information displayed', () => {
  const menuOptionProps = {
    activeHarpStrata: harpStrata,
    setActiveHarpStrata: jest.fn(),
    activeDisplayMode: DisplayModes.Degree,
    setActiveDisplayMode: jest.fn()
  }
  const { getByText } = render(<ApparatusOption {...menuOptionProps} />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeTruthy()
})
