import React from 'react'

import type { DisplayModes } from '../../../HarpFace'

export type SwipeControlWrapperProps = {
  readonly setActiveDisplayMode: (displayMode: DisplayModes) => void;
  readonly activeDisplayMode: DisplayModes;
  readonly children: React.ReactNode
}
