import React from 'react'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { HarpGuru } from './index'

test('a component is rendered with a visible Root degree', () => {
  const { getAllByText } = render(<HarpGuru />)

  const [ root ] = getAllByText(DegreeIds.Root)
  expect(root).toBeTruthy()
})
