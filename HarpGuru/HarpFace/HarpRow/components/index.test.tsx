import 'react-native'
import React from 'react'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { harpFaceProps } from '../../testResources'

import {HarpRow} from './index'


test('A blow row from a major diatonic harmonica can be rendered', () => {
  const { getAllByText } = render(<HarpRow {...harpFaceProps} yCoord={2}/>)

  expect(getAllByText(DegreeIds.Root)[0]).toBeTruthy()
  expect(getAllByText(DegreeIds.Third)[0]).toBeTruthy()
  expect(getAllByText(DegreeIds.Fifth)[0]).toBeTruthy()
})
