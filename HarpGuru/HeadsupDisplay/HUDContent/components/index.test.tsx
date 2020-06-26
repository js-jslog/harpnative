import React from 'react'
import {render} from '@testing-library/react-native'

import { HUDContent } from './index'

test('HUDContent renders a component', () => {
  const { container } = render(<HUDContent />)
  expect(container).toBeTruthy()
})
