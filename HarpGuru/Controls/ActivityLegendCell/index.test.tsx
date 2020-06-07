import React from 'react'
import { render } from '@testing-library/react-native'

import { ActivityLegendCell } from './index'

test('A component is rendered', () => {
  const { container } = render(<ActivityLegendCell />)
  expect(container).toBeTruthy()
})
