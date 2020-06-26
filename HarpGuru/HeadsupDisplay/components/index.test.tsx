import { Text } from 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import { HeadsupDisplay } from './index'

test('HeadsupDisplay renders a component with children', () => {
  const testText = 'Test text'
  const { getByText } = render(<HeadsupDisplay><Text>{testText}</Text></HeadsupDisplay>)
  expect(getByText(testText)).toBeTruthy()
})
