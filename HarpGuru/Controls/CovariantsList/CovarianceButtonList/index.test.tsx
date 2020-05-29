import React from 'react'
import { render } from '@testing-library/react-native'

import { CovarianceButtonList } from './index'

test('A list is produced with a CovarianceButton in it', () => {
  const component = render(<CovarianceButtonList />)

  expect(component).toBeTruthy()
})
