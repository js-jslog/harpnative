import React from 'react'
import type { ReactElement } from 'react'

import { HoleNumber } from '../../hole-number'

export const getHoleNumbers = (
  xRange: ReadonlyArray<number>
): ReactElement[] => {
  return xRange.map((xCoord) => {
    return <HoleNumber key={xCoord} xCoord={xCoord} />
  })
}
