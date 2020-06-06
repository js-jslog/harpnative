import React from 'react'
import { PitchIds, DegreeIds } from 'harpstrata'
import {render, fireEvent} from '@testing-library/react-native'

import { DisplayModes } from '../HarpFace'
import { exampleHarpFaceProps } from '../HarpFace'

import {HarpCell} from './index'

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity', () => 'TouchableOpacity')

test('A component is rendered with the Degree or Pitch value in its text view depending on the DisplayMode selected', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree }
  const {getByText, rerender} = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  expect(getByText(DegreeIds.Second)).toBeTruthy()

  rerender(<HarpCell {...harpFaceProps} activeDisplayMode={DisplayModes.Pitch} yxCoord={[3,0]} />)

  expect(getByText(PitchIds.D)).toBeTruthy()
})

test('A component is rendered with an a11y role of button', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree }
  const { getByRole } = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  expect(getByRole('button')).toBeTruthy()
})

test('A component is rendered without an a11y role of button if it has no content', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree }
  const { queryByRole  } = render(<HarpCell {...harpFaceProps} yxCoord={[0,0]} />)

  expect(queryByRole('button')).toBeNull()
})

test('A press of the componenet results in toggled active ids in the harpstrata passed to the paramaterised setter', () => {
  const setActiveHarpStrata = jest.fn()
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree, setActiveHarpStrata }

  const { getByText } = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  fireEvent.press(getByText(DegreeIds.Second))

  const { mock: { calls: [[ newHarpStrata ]]}} = setActiveHarpStrata
  const { isActiveComplex: { activeDegreeIds: newDegreeIds, activePitchIds: newPitchIds }} = newHarpStrata

  const expectedDegreeIds = [DegreeIds.Second]
  const expectedPitchIds = [PitchIds.D]

  expect(setActiveHarpStrata.mock.calls.length).toBe(1)  
  expect(newDegreeIds).toStrictEqual(expectedDegreeIds)
  expect(newPitchIds).toStrictEqual(expectedPitchIds)
})

test('A snapshot of a populated cell', () => {
  const setActiveHarpStrata = jest.fn()
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree, setActiveHarpStrata }

  const { container } = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)
  expect(container).toMatchSnapshot()
})

test('A snapshot of an empty cell', () => {
  const setActiveHarpStrata = jest.fn()
  const harpFaceProps = { ...exampleHarpFaceProps, activeDisplayMode: DisplayModes.Degree, setActiveHarpStrata }

  const { container } = render(<HarpCell {...harpFaceProps} yxCoord={[0,0]} />)
  expect(container).toMatchSnapshot()
})
