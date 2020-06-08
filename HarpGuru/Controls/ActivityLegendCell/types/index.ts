import { ViewStyle, TextStyle } from 'react-native'
import { DegreeIds, PitchIds } from 'harpstrata'

export type DegreeLegendKey = {
  readonly itemId: DegreeIds;
  readonly activeIds: ReadonlyArray<DegreeIds>;
}
export type PitchLegendKey = {
  readonly itemId: PitchIds;
  readonly activeIds: ReadonlyArray<PitchIds>;
}
export type ActivityLegendCellProps = DegreeLegendKey | PitchLegendKey;

export type ActivityLegendCellStyles = {
  readonly cell: ViewStyle;
  readonly text: TextStyle;
}
