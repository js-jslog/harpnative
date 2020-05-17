import 'react-native'
import React from 'react'
import { PitchIds, DegreeIds } from 'harpstrata'
import {render} from '@testing-library/react-native'

import { DisplayModes } from '../HarpFace'
import { exampleHarpFaceProps } from '../HarpFace'

import {HarpCell} from './index'

test('A component is rendered with the Degree value in its text view when the Degree DisplayMode is selected', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, displayMode: DisplayModes.Degree }
  const {getByText} = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  expect(getByText(DegreeIds.Second)).toBeTruthy()
})

test('A component is rendered with the Pitch value in its text view when the Pitch DisplayMode is selected', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, displayMode: DisplayModes.Pitch }
  const {getByText} = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  expect(getByText(PitchIds.D)).toBeTruthy()
})
