import { ViewStyle, TextStyle } from 'react-native'
import { DegreeIds, PitchIds } from 'harpstrata'

import type { HarpStrataControlProps } from '../../types'
import type { DisplayModes } from '../../../HarpFace'

export type DegreeLegendKey = HarpStrataControlProps & {
  readonly itemId: DegreeIds;
  readonly activeIds: ReadonlyArray<DegreeIds>;
  readonly activeDisplayMode: DisplayModes;
}

export type PitchLegendKey = HarpStrataControlProps & {
  readonly itemId: PitchIds;
  readonly activeIds: ReadonlyArray<PitchIds>;
  readonly activeDisplayMode: DisplayModes;
}

export type ActivityLegendCellProps = DegreeLegendKey | PitchLegendKey;

export type ActivityLegendCellStyles = {
  readonly cell: ViewStyle;
  readonly text: TextStyle;
}
