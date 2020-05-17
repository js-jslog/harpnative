import React from 'react'
import { PitchIds, PozitionIds, DegreeIds } from 'harpstrata'
import { render, fireEvent, NativeTestEvent, getByText, getAllByText, queryByText } from '@testing-library/react-native'

import { DisplayModes } from '../HarpFace'

import { HarpGuru } from './index'

test('a component is rendered with a visible Root degree', () => {
  const { getAllByText } = render(<HarpGuru />)

  const [ root ] = getAllByText(DegreeIds.Root)

  expect(root).toBeTruthy()
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

test('The HarpFace presents Degrees and Pitches when the relevant DisplayModeToggle option is selected', () => {
  const { container } = render(<HarpGuru />)
  const [ hole7b ] = getAllByText(container, DegreeIds.Flat7)
  const holeAbAbsent = queryByText(container, PitchIds.Ab)

  expect(hole7b).toBeTruthy()
  expect(holeAbAbsent).toBeNull()

  fireEvent(getByText(container, DisplayModes.Pitch), new NativeTestEvent('press'))

  const [ holeAb ] = getAllByText(container, PitchIds.Ab)
  const hole7bAbsent = queryByText(container, DegreeIds.Flat7)
  
  expect(holeAb).toBeTruthy()
  expect(hole7bAbsent).toBeNull()
  
  fireEvent.press(getByText(container, DisplayModes.Degree))
  
  const [ hole7bAgain ] = getAllByText(container, DegreeIds.Flat7)
  const holeAbAbsentAgain = queryByText(container, PitchIds.Ab)
  
  expect(hole7bAgain).toBeTruthy()
  expect(holeAbAbsentAgain).toBeNull()
})
