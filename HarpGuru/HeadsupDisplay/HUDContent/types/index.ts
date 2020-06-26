import type { PozitionIds, PitchIds } from 'harpstrata'

export type HUDContentProps = {
  readonly harpKeyId: PitchIds,
  readonly pozitionId: PozitionIds,
  readonly rootPitchId: PitchIds,
}
