import React from 'react'
import { render } from '@testing-library/react-native'

import { HeadsupDisplay } from './index'

test('HeadsupDisplay renders a component', () => {
  const { container } = render(<HeadsupDisplay />)
  expect(container).toBeTruthy()
})
