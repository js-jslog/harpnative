import React from 'react'
import { render } from '@testing-library/react-native'

import { HarpGuru } from './index'

test('a component is rendered', () => {
  const container = render(<HarpGuru />)

  expect(container).toBeTruthy()
})
