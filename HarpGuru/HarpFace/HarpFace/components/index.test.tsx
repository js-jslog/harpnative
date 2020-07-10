import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import { harpFaceProps } from '../../testResources'

import { HarpFace } from './index'

test('A snapshot of a HarpFace', () => {
  const { container } = render(<HarpFace {...harpFaceProps} />)

  expect(container).toMatchSnapshot()
})
