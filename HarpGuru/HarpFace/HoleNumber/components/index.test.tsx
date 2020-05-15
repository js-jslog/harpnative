import React from 'react'
import { render } from '@testing-library/react-native'

import { HoleNumber } from './index'

test('HoleNumber renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleNumber xCoord={0} />)
  expect(getByText('1')).toBeTruthy()
})
