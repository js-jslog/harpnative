import React from 'react'
import { render } from '@testing-library/react-native'

import { PozitionControlPanel } from './index'

test('A component is rendered', () => {
  const component = render(<PozitionControlPanel />)

  expect(component).toBeTruthy()
})
