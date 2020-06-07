import React from 'react'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { ActivityLegendCell } from './index'

test('A component is rendered displaying an itemId', () => {
  const activityLegendCell = {
    itemId: DegreeIds.Root
  }
  const { getByText } = render(<ActivityLegendCell {...activityLegendCell} />)
  expect(getByText(DegreeIds.Root)).toBeTruthy()
})
