import React from 'react'
import {PitchIds, PozitionIds, HarpStrataProps, ApparatusIds, ActiveIds, getHarpStrata} from 'harpstrata'
import {render} from '@testing-library/react-native'

import { HUDContent } from './index'

const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  harpKeyId: PitchIds.C,
  activeIds: [] as ActiveIds,
}

const harpStrata = getHarpStrata(harpStrataProps)

test('HUDContent renders a component with position and key information displayed', () => {
  const hudContentProps = {
    activeHarpStrata: harpStrata,
    setActiveHarpStrata: jest.fn(),
  }
  const { getByText } = render(<HUDContent {...hudContentProps} />)

  expect(getByText(PitchIds.C)).toBeTruthy()
  expect(getByText(PitchIds.G)).toBeTruthy()
  expect(getByText(PozitionIds.Second)).toBeTruthy()
})