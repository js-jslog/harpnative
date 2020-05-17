import {render} from 'react-native-testing-library'
import 'react-native'
import React from 'react'
import { ApparatusIds, PozitionIds } from 'harpstrata'

import { exampleHarpStrataControlProps } from '../testResources'

import {HeadsupDisplay} from './index'

const { activeHarpStrata } = exampleHarpStrataControlProps

test('A component is rendered with Apparatus & Pozition info', () => {
  const { getByA11yLabel, getByText } = render(<HeadsupDisplay {...activeHarpStrata} />)

  const apparatusContainer = getByA11yLabel('Active Apparatus')
  const pozitionContainer = getByA11yLabel('Active Pozition')
  const activeApparatus = getByText(ApparatusIds.MajorDiatonic)
  const activePozition = getByText(PozitionIds.First)

  expect(apparatusContainer).toBeTruthy()
  expect(activeApparatus).toBeTruthy()

  expect(pozitionContainer).toBeTruthy()
  expect(activePozition).toBeTruthy()
})
