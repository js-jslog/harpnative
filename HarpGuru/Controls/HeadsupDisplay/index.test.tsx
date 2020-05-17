import {render} from 'react-native-testing-library'
import 'react-native'
import React from 'react'
import { ApparatusIds } from 'harpstrata'

import { exampleHarpStrataControlProps } from '../testResources'

import {HeadsupDisplay} from './index'

const { activeHarpStrata } = exampleHarpStrataControlProps

test('A component is rendered with Apparatus info', () => {
  const { getByA11yLabel, getByText } = render(<HeadsupDisplay {...activeHarpStrata} />)

  const container = getByA11yLabel('Active Apparatus')
  const apparatusLabel = getByText(ApparatusIds.MajorDiatonic)

  expect(container).toBeTruthy()
  expect(apparatusLabel).toBeTruthy()
})
