import 'react-native'
import React from 'react'
import {render} from '@testing-library/react-native'

import { exampleHarpFaceProps } from '../HarpFace'

import {HarpGuruHome} from './index'

test('A component is rendered', () => {
  const setDisplayMode = jest.fn()
  const harpGuruHomeProps = { ...exampleHarpFaceProps, setDisplayMode }
  const { container } = render(<HarpGuruHome {...harpGuruHomeProps} />)

  expect(container).toBeTruthy()
})
