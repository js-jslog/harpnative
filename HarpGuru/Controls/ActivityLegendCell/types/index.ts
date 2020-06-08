import { ViewStyle, TextStyle } from 'react-native'
import { DegreeIds, PitchIds } from 'harpstrata'

export type ActivityLegendCellProps = {
  readonly itemId: DegreeIds | PitchIds;
}

export type ActivityLegendCellStyles = {
  readonly cell: ViewStyle;
  readonly text: TextStyle;
}
