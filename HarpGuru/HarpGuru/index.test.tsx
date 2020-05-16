import React from 'react'
import { PozitionIds, DegreeIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent, getByText } from '@testing-library/react-native'

import { HarpGuru } from './index'

test('a component is rendered with a visible Root degree', () => {
  const { getAllByText, getByText } = render(<HarpGuru />)

  const [ root ] = getAllByText(DegreeIds.Root)
  const controlPanel = getByText('Control Panel')

  expect(root).toBeTruthy()
  expect(controlPanel).toBeTruthy()
})

test('The HarpFace presents shifting DegreeIds when the relevant Pozitions are selected', () => {
  const { container, getAllByText } = render(<HarpGuru />)

  fireEvent(getByText(container, PozitionIds.First), new NativeTestEvent('press'))
  const [ hole1st ] = getAllByText(DegreeIds.Root)

  fireEvent(getByText(container, PozitionIds.Second), new NativeTestEvent('press'))
  const hole4th = getByText(hole1st, DegreeIds.Fourth)
  expect(hole4th).toBeTruthy()

  fireEvent(getByText(container, PozitionIds.First), new NativeTestEvent('press'))
  const hole1stAgain = getByText(hole4th, DegreeIds.Root)
  expect(hole1stAgain).toBeTruthy()
})
