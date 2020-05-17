import React from 'react'
import { PitchIds, DegreeIds } from 'harpstrata'
import {render} from '@testing-library/react-native'

import { DisplayModes } from '../HarpFace'
import { exampleHarpFaceProps } from '../HarpFace'

import {HarpCell} from './index'

test('A component is rendered with the Degree or Pitch value in its text view depending on the DisplayMode selected', () => {
  const harpFaceProps = { ...exampleHarpFaceProps, displayMode: DisplayModes.Degree }
  const {getByText, rerender} = render(<HarpCell {...harpFaceProps} yxCoord={[3,0]} />)

  expect(getByText(DegreeIds.Second)).toBeTruthy()

  rerender(<HarpCell {...harpFaceProps} displayMode={DisplayModes.Pitch} yxCoord={[3,0]} />)

  expect(getByText(PitchIds.D)).toBeTruthy()
})
