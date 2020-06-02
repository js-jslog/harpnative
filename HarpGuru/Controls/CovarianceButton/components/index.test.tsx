import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import type { CovariantsGroup } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react-native'

import { keyCHarpStrata, keyDHarpStrata } from '../../testResources'
import type { PozitionControlPrimerLockedRootPitch, HarpKeyControlPrimerLockedPozition } from '../../CovariantsGroupList'
import { CovarianceParts } from '../../CovariantsGroupList'

import { CovarianceButton } from './index'


test('Displays a Harp Key and Pozition when a PozitionControlPrimerLockedRootPitch given', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const pozitionControlPrimerLockedRootPitch: PozitionControlPrimerLockedRootPitch = {
    lockedType: CovarianceParts.RootPitch,
    variedType: CovarianceParts.HarpKey,
    lockedValue: PitchIds.C,
    variedValue: PitchIds.C,
  }
  const covariantsGroup: CovariantsGroup = {
    rootPitchId: PitchIds.C,
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.First,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, ...pozitionControlPrimerLockedRootPitch, ...covariantsGroup }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedTitle = `${PitchIds.C} ${PozitionIds.First}`
  expect(getByText(expectedTitle)).toBeTruthy()
})

test('Calls setActiveHarpStrata with the expected new HarpStrata when given a HarpKeyControlPrimerLockedPozition', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const harpKeyControlPrimerLockedPozition: HarpKeyControlPrimerLockedPozition = {
    lockedType: CovarianceParts.Pozition,
    variedType: CovarianceParts.RootPitch,
    lockedValue: PozitionIds.First,
    variedValue: PitchIds.F,
  }
  const covariantsGroup: CovariantsGroup = {
    rootPitchId: PitchIds.D,
    harpKeyId: PitchIds.D,
    pozitionId: PozitionIds.First,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, ...harpKeyControlPrimerLockedPozition, ...covariantsGroup }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedHarpStrata = keyDHarpStrata
  const expectedTitle = `${PitchIds.D} ${PitchIds.D}`
  fireEvent.press(getByText(expectedTitle))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(expectedHarpStrata)
})
