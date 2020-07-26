import React from 'react'
import type { ReactElement } from 'react'

import type { HoleNumberRowProps } from '../types'
import { HoleNumber } from '../../../components/hole-number'

export const getHoleNumbers = ({
  xRange,
}: HoleNumberRowProps): ReactElement[] => {
  return xRange.map((xCoord) => {
    return <HoleNumber key={xCoord} xCoord={xCoord} />
  })
}
