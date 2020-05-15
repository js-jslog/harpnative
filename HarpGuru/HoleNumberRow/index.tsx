import React from 'react'
import type { ReactElement } from 'react'

import type { HarpFaceProps } from '../HarpFace'

import { getHoleNumbers } from './getHoleNumbers'

export const HoleNumberRow = (props: HarpFaceProps): ReactElement => {
  const holeNumbers = getHoleNumbers(props)

  return (
    <>{ holeNumbers }</>
  )
}
