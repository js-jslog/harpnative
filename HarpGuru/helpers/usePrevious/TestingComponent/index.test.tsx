import React from 'react'
import {render} from '@testing-library/react-native'

import { TestingComponent } from './index'

test('A component is rendered with its prop value displayed', () => {
  const {getByText, rerender} = render(<TestingComponent value={'testing component render'} />)

  expect(getByText('testing component render')).toBeTruthy()

  rerender(<TestingComponent value={'now it has rendered again'} />)

  expect(getByText('now it has rendered again')).toBeTruthy()
})
