import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

import type { HarpFaceFragmentProps } from '../../types'
import { HoleNumber } from '../../HoleNumber'
import type { HoleNumberProps } from '../../HoleNumber'

export const getHoleNumbers = (
  props: HarpFaceFragmentProps
): ReactElement[] => {
  const { activeHarpStrata } = props
  const { degreeMatrix } = activeHarpStrata
  // TODO: probably we can literally just use the xRange or similar param
  // when we come back to do this properly
  let [degreeRow] = degreeMatrix
  if (props.xRange) degreeRow = [ ...degreeRow.slice(props.xRange[0], props.xRange[1])]

  return degreeRow.map((_: Degree | undefined, index: number) => {
    const xCoord = index + (props.xRange && props.xRange[0] || 0)
    const holeNumberProps: HoleNumberProps = { xCoord }

    return <HoleNumber key={index} {...holeNumberProps} />
  })
}
