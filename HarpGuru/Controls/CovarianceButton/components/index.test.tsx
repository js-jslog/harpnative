import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantSet } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react-native'

import { keyCHarpStrata, keyDHarpStrata } from '../../testResources'
import type { PozitionByHarpKeyAtRootPitchPrimer, HarpKeyByRootPitchAtPozitionPrimer } from '../../CovarianceSeries'
import { CovariantMembers } from '../../CovarianceSeries'

import { CovarianceButton } from './index'


test('Displays a Harp Key and Pozition when a PozitionByHarpKeyAtRootPitchPrimer given', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const pozitionByKeyAtPitchPrimer: PozitionByHarpKeyAtRootPitchPrimer = {
    lockedType: CovariantMembers.RootPitch,
    variedType: CovariantMembers.HarpKey,
    lockedValue: PitchIds.C,
    variedValue: PitchIds.C,
  }
  const covariantSet: CovariantSet = {
    rootPitchId: PitchIds.C,
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.First,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, ...pozitionByKeyAtPitchPrimer, ...covariantSet }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedTitle = `${PitchIds.C} ${PozitionIds.First}`
  expect(getByText(expectedTitle)).toBeTruthy()
})

test('Calls setActiveHarpStrata with the expected new HarpStrata when given a HarpKeyByRootPitchAtPozitionPrimer', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const keyByPitchAtPozitionPrimer: HarpKeyByRootPitchAtPozitionPrimer = {
    lockedType: CovariantMembers.Pozition,
    variedType: CovariantMembers.RootPitch,
    lockedValue: PozitionIds.First,
    variedValue: PitchIds.F,
  }
  const covariantSet: CovariantSet = {
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.D,
    pozitionId: PozitionIds.First,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, ...keyByPitchAtPozitionPrimer, ...covariantSet }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedHarpStrata = keyDHarpStrata
  const expectedTitle = `${PitchIds.D} ${PitchIds.D}`
  fireEvent.press(getByText(expectedTitle))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(expectedHarpStrata)
})
