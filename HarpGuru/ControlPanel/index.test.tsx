import React from 'react'
import { render } from '@testing-library/react-native'

import { ControlPanel } from './index'

test('a component is rendered', () => {
  const container = render(<ControlPanel />)

  expect(container).toBeTruthy()
})
