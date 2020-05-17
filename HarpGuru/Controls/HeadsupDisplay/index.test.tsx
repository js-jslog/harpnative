import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'

import { exampleHarpStrataControlProps } from '../testResources'

import {HeadsupDisplay} from './index'

const { activeHarpStrata } = exampleHarpStrataControlProps

test('A component is rendered', () => {
  const { container } = render(<HeadsupDisplay {...activeHarpStrata} />)

  expect(container).toBeTruthy()
})
