import type { PozitionIds } from 'harpstrata'

export type PozitionButtonParentProps = {
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
}

export type PozitionButtonProps = PozitionButtonParentProps & {
  readonly id: PozitionIds;
}
