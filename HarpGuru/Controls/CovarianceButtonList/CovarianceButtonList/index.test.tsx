import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../testResources'

import { CovarianceButtonList } from './index'

test('A list is produced with multiple RootPitchControlVars CovarianceButton in it', () => {
  const harpStrataControlProps = {
    setActiveHarpStrata: jest.fn(),
    activeHarpStrata: keyCHarpStrata, 
  }
  const { getByText } = render(<CovarianceButtonList {...harpStrataControlProps} />)

  const expectedText1 = `${PitchIds.C} ${PozitionIds.First}`
  const expectedText2 = `${PitchIds.C} ${PozitionIds.Tenth}`
  expect(getByText(expectedText1)).toBeTruthy()
  expect(getByText(expectedText2)).toBeTruthy()
})
