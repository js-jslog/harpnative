import { Text } from 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import { SweepingBanner } from './index'

test('SweepingBanner renders a component with children', () => {
  const testText = 'Test text'
  const { getByText } = render(<SweepingBanner><Text>{testText}</Text></SweepingBanner>)
  expect(getByText(testText)).toBeTruthy()
})
