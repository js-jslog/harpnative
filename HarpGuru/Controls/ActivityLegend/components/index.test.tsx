import React from 'react'
import { render } from '@testing-library/react-native'

import { ActivityLegend } from './index'

test('A component is rendered', () => {
  const { container } = render(<ActivityLegend />)
  expect(container).toBeTruthy()
})
