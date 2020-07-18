import React from 'react'
import { InteractionIds, HarpStrata } from 'harpstrata'

import { HarpRows } from '../types'
import { mapRowToBlowDrawIds } from '../mapRowToBlowDrawIds'
import { HarpRow } from '../../HarpRow'
import type { HarpFaceFragmentProps } from '../../HarpFaceFragment'

type Props = HarpFaceFragmentProps & {
  readonly activeHarpStrata: HarpStrata
}

export const getHarpRows = (props: Props): HarpRows => {
  const {
    activeHarpStrata: {
      apparatus: { interactionMatrix },
    },
  } = props
  const blowDrawIdsMap = interactionMatrix.map(mapRowToBlowDrawIds)

  const drawIndex = blowDrawIdsMap.indexOf(InteractionIds.Draw)
  const topRowsPrimer = blowDrawIdsMap.slice(0, drawIndex)
  const bottomRowsPrimer = blowDrawIdsMap.slice(drawIndex)

  const topHarpRows = topRowsPrimer.map((_, index) => {
    return <HarpRow key={index} {...props} yCoord={index} />
  })
  const bottomHarpRows = bottomRowsPrimer.map((_, index) => {
    const amendedIndex = index + topHarpRows.length
    return <HarpRow key={amendedIndex} {...props} yCoord={amendedIndex} />
  })

  const harpRows = {
    top: topHarpRows,
    bottom: bottomHarpRows,
  }

  return harpRows
}
