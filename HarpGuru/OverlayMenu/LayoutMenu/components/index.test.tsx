import React from 'react'
import {PitchIds, PozitionIds, HarpStrataProps, ApparatusIds, ActiveIds, getHarpStrata} from 'harpstrata'
import {render} from '@testing-library/react-native'

import {DisplayModes} from '../../../HarpFace'

import { LayoutMenu } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.Second,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const harpStrata = getHarpStrata(harpStrataProps)

test('LayoutMenu renders a component with a major diatonic layout selected', () => {
  const hudContentProps = {
    activeHarpStrata: harpStrata,
    setActiveHarpStrata: jest.fn(),
    activeDisplayMode: DisplayModes.Degree,
  }
  const { getByText } = render(<LayoutMenu {...hudContentProps} />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeTruthy()
})
