import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { exampleHarpStrataControlProps }  from '../testResources'

import { PozitionControlPanel } from './index'

test('A component is rendered with a first pozition button present', () => {
  const { getByText } = render(<PozitionControlPanel {...exampleHarpStrataControlProps} />)

  expect(getByText(PozitionIds.First)).toBeTruthy()
})
