import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import type { HarpKeyControlVars, PozitionControlVars, RootPitchControlVars } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react-native'

import { keyCHarpStrata, keyDHarpStrata } from '../testResources'

import { CovarianceButton } from './index'


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

test('Displays a Harp Key and a Root Pitch when a PozitionControlVars object is given', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const covariantControlVars: PozitionControlVars = {
    harpKeyId: PitchIds.D,
    rootPitchId: PitchIds.C,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, covariantControlVars }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedTitle = `${PitchIds.D} ${PitchIds.C}`
  expect(getByText(expectedTitle)).toBeTruthy()
})

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

test('Calls setActiveHarpStrata with the expected new HarpStrata when given a RootPitchControlVars object in the params', () => {
  const setActiveHarpStrata = jest.fn()
  const activeHarpStrata = keyCHarpStrata
  const covariantControlVars: RootPitchControlVars = {
    harpKeyId: PitchIds.D,
    pozitionId: keyCHarpStrata.pozitionId,
  }

  const covarianceButtonProps = { setActiveHarpStrata, activeHarpStrata, covariantControlVars }

  const { getByText } = render(<CovarianceButton { ...covarianceButtonProps } />)

  const expectedHarpStrata = keyDHarpStrata

  const expectedTitle = `${PitchIds.D} ${PozitionIds.First}`
  fireEvent.press(getByText(expectedTitle))

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)
  expect(setActiveHarpStrata.mock.calls[0][0]).toStrictEqual(expectedHarpStrata)
})
