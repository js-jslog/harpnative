import React from 'react'
import {PitchIds, PozitionIds} from 'harpstrata'
import {render} from '@testing-library/react-native'

import { HUDContent } from './index'


test('HUDContent renders a component with position and key information displayed', () => {
  const hudContentProps = {
    harpKeyId: PitchIds.C,
    pozitionId: PozitionIds.Second,
    rootPitchId: PitchIds.G,
  }
  const { getByText } = render(<HUDContent {...hudContentProps} />)

  expect(getByText(PitchIds.C)).toBeTruthy()
  expect(getByText(PitchIds.G)).toBeTruthy()
  expect(getByText(PozitionIds.Second)).toBeTruthy()
})
