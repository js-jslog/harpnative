import React from 'react'
import { render } from '@testing-library/react-native'

import { HoleNumberRow } from './index'

test('HoleNumberRow returns a 10 hole sequence', () => {
  const { queryByText, getByText } = render(
    <HoleNumberRow xRange={[0,1,2,3,4,5,6,7,8,9]} />
  )

  expect(queryByText('0')).toBeNull()
  expect(getByText('1')).toBeTruthy()
  expect(getByText('2')).toBeTruthy()
  expect(getByText('3')).toBeTruthy()
  expect(getByText('4')).toBeTruthy()
  expect(getByText('5')).toBeTruthy()
  expect(getByText('6')).toBeTruthy()
  expect(getByText('7')).toBeTruthy()
  expect(getByText('8')).toBeTruthy()
  expect(getByText('9')).toBeTruthy()
  expect(getByText('10')).toBeTruthy()
  expect(queryByText('11')).toBeNull()
})

test('A snapshot of HoleNumberRow', () => {
  const { container } = render(<HoleNumberRow xRange={[0,1,2,3,4,5,6,7,8,9]}/>)

  expect(container).toMatchSnapshot()
})
