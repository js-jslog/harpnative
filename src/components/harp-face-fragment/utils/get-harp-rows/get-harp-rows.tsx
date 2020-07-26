import React, { ReactElement } from 'react'
import { InteractionIds } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'

import { mapRowToBlowDrawIds } from '../map-row-to-blow-draw-ids'
import { HarpRow } from '../../../harp-row'

type Props = {
  readonly xRange: ReadonlyArray<number>
  readonly activeHarpStrata: HarpStrata
}

type HarpRows = {
  readonly top: ReactElement[]
  readonly bottom: ReactElement[]
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
