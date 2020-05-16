import React from 'react'

import type {HarpFaceProps} from '../types'
import { HoleNumberRow } from '../../HoleNumberRow'
import { getHarpRows } from '../../HarpRows'


export const HarpFace = (props: HarpFaceProps): React.ReactElement => {
  const harpRows = getHarpRows(props)
  return (
    <>
      { harpRows.top }
      <HoleNumberRow {...props} />
      { harpRows.bottom }
    </>
  )
}
