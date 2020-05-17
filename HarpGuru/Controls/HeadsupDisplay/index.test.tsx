import {render} from 'react-native-testing-library'
import 'react-native'
import React from 'react'
import { ApparatusIds, PozitionIds, PitchIds } from 'harpstrata'

import { exampleHarpStrataControlProps } from '../testResources'

import {HeadsupDisplay} from './index'

const { activeHarpStrata } = exampleHarpStrataControlProps

test('A component is rendered with Apparatus & Pozition info', () => {
  const { getByA11yLabel, getByText } = render(<HeadsupDisplay {...activeHarpStrata} />)

  const apparatusContainer = getByA11yLabel('Active Apparatus')
  const pozitionContainer = getByA11yLabel('Active Pozition')
  const harpKeyContainer = getByA11yLabel('Active Harp Key')
  const activeApparatus = getByText(ApparatusIds.MajorDiatonic)
  const activePozition = getByText(PozitionIds.First)
  const activeHarpKey = getByText(PitchIds.C)

  expect(apparatusContainer).toBeTruthy()
  expect(activeApparatus).toBeTruthy()

  expect(pozitionContainer).toBeTruthy()
  expect(activePozition).toBeTruthy()

  expect(harpKeyContainer).toBeTruthy()
  expect(activeHarpKey).toBeTruthy()
})
