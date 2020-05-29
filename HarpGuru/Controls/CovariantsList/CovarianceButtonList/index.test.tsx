import React from 'react'
import { PitchIds, PozitionIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { keyCHarpStrata } from '../testResources'

import { CovarianceButtonList } from './index'

test('A list is produced with a RootPitchControlVars CovarianceButton in it', () => {
  const harpStrataControlProps = {
    setActiveHarpStrata: jest.fn(),
    activeHarpStrata: keyCHarpStrata, 
  }
  const { getByText } = render(<CovarianceButtonList {...harpStrataControlProps} />)

  const expectedText = `${PitchIds.C} ${PozitionIds.First}`
  expect(getByText(expectedText)).toBeTruthy()
})
