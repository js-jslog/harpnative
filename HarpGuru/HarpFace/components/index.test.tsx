import reactn from 'reactn'
import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import { harpFaceProps } from '../testResources'

import { HarpFace } from './index'

jest.mock('reactn')
reactn.useGlobal.mockReturnValue([harpFaceProps.activeHarpStrata])

test('A component is rendered', () => {
  const { container } = render(<HarpFace {...harpFaceProps} />)

  expect(container).toMatchSnapshot()
})
