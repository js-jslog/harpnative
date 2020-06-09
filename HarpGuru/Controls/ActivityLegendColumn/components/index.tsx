import { FlatList } from 'react-native'
import React from 'react'
import type { ReactElement } from 'react'
import { isPitchId, getPitchIds, DegreeIds, PitchIds } from 'harpstrata'

import type { ActivityLegendColumnProps } from '../types'
import type { HarpStrataControlProps } from '../../types'
import { ActivityLegendCell } from '../../ActivityLegendCell'
import type { ActivityLegendCellProps } from '../../ActivityLegendCell'

const getIdSequence = (props: ActivityLegendColumnProps): ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds> => {
  const { originId } = props

  if (isPitchId(originId)) {
    return getPitchIds(originId)
  } else {
    return Object.values(DegreeIds)
  }
}

const renderItem = (itemId: DegreeIds | PitchIds, activeIds: ReadonlyArray<DegreeIds | PitchIds>, harpStrataControlProps: HarpStrataControlProps): ReactElement => {
  // TODO: improve this function's variable names at the very least
  // if not improve the way it's managing this polymorphism.
  // The activeIds types are unduely blended as well.
  if (isPitchId(itemId)) {
    const a = itemId as PitchIds
    const b = activeIds as ReadonlyArray<PitchIds>
    const { activeHarpStrata, setActiveHarpStrata } = harpStrataControlProps
    const activityLegendCellProps: ActivityLegendCellProps = {
      activeHarpStrata, setActiveHarpStrata, itemId: a, activeIds: b
    }
    return <ActivityLegendCell {...activityLegendCellProps} />
  } else {
    const a = itemId as DegreeIds
    const b = activeIds as ReadonlyArray<DegreeIds>
    const { activeHarpStrata, setActiveHarpStrata } = harpStrataControlProps
    const activityLegendCellProps: ActivityLegendCellProps = {
      activeHarpStrata, setActiveHarpStrata, itemId: a, activeIds: b
    }
    return <ActivityLegendCell {...activityLegendCellProps} />
  }
}

export const ActivityLegendColumn = (props: ActivityLegendColumnProps): ReactElement => {
  const idSequence = getIdSequence(props)
  const { activeHarpStrata, setActiveHarpStrata, activeIds } = props
  const harpStrataControlProps = { activeHarpStrata, setActiveHarpStrata }
  return (
    <FlatList
      data={idSequence as ReadonlyArray<DegreeIds | PitchIds>}
      renderItem={({ item }): ReactElement => renderItem(item, activeIds, harpStrataControlProps)}
      keyExtractor={(item): string => item}
    />
  )
}
