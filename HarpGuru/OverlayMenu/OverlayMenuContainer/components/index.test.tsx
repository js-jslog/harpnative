import { Text } from 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import { OverlayMenuContainer } from './index'

test('OverlayMenuContainer renders a component with children', () => {
  const testText = 'Test text'
  const { getByText } = render(<OverlayMenuContainer bannerActive={true}><Text>{testText}</Text></OverlayMenuContainer>)
  expect(getByText(testText)).toBeTruthy()
})
