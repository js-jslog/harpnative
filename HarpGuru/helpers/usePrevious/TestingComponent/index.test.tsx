import React from 'react'
import {render} from '@testing-library/react-native'

import { TestingComponent } from './index'

test('A component is rendered with its prop value displayed as well as its previous prop value', () => {
  const {getByText, rerender} = render(<TestingComponent value={'testing component render'} initial={'no previous on first render'} />)

  expect(getByText('Current: testing component render')).toBeTruthy()
  expect(getByText('Previous: no previous on first render')).toBeTruthy()

  rerender(<TestingComponent value={'now it has rendered again'} initial={'it doesnt matter what this is after hook initialisation'}/>)

  expect(getByText('Current: now it has rendered again')).toBeTruthy()
  expect(getByText('Previous: testing component render')).toBeTruthy()
})
