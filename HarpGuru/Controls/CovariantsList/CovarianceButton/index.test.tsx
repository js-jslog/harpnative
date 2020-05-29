import React from 'react'
import { render } from '@testing-library/react-native'

import { CovarianceButton } from './index'

test('CovarianceButton renders a component', () => {
  const component = render(<CovarianceButton />)

  expect(component).toBeTruthy()
})
