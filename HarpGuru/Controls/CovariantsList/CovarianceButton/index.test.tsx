import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, RootPitchControlVars } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../testResources'

import { CovarianceButton } from './index'


test('Displays a Harp Key and Pozition when a RootPitchControlVars object is given', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const covariantControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.Second,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, covariantControlVars }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedTitle = `${PitchIds.C} ${PozitionIds.Second}`
  expect(getByText(expectedTitle)).toBeTruthy()
})

test('Displays a Pozition and a Root Pitch when a HarpKeyControlVars object is given', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const covariantControlVars: HarpKeyControlVars = {
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.C,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, covariantControlVars }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedTitle = `${PozitionIds.Second} ${PitchIds.C}`
  expect(getByText(expectedTitle)).toBeTruthy()
})
