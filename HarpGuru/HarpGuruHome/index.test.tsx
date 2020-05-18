import 'react-native'
import React from 'react'
import {render, fireEvent, NativeTestEvent} from '@testing-library/react-native'

import { DisplayModes } from '../HarpFace'
import { exampleHarpFaceProps } from '../HarpFace'

import {HarpGuruHome} from './index'

test('A component is rendered', () => {
  const setDisplayMode = jest.fn()
  const harpGuruHomeProps = { ...exampleHarpFaceProps, setDisplayMode }
  const { container } = render(<HarpGuruHome {...harpGuruHomeProps} />)

  expect(container).toBeTruthy()
})

test('The HarpGuruHome calls the parameterised setDisplayMode function when the degree and pich buttons are pressed', () => {
  const setDisplayMode = jest.fn()
  const harpGuruHomeProps = { ...exampleHarpFaceProps, setDisplayMode }
  const { getByText } = render(<HarpGuruHome { ...harpGuruHomeProps } />)

  fireEvent(getByText(DisplayModes.Degree), new NativeTestEvent('press'))
  fireEvent(getByText(DisplayModes.Pitch), new NativeTestEvent('press'))

  expect(setDisplayMode.mock.calls.length).toBe(2)
  expect(setDisplayMode.mock.calls[0][0]).toBe(DisplayModes.Degree)
  expect(setDisplayMode.mock.calls[1][0]).toBe(DisplayModes.Pitch)
})
