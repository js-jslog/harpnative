import React from 'react'
import { ApparatusIds } from 'harpstrata'
import { render } from '@testing-library/react-native'

import { DisplayModes } from '../../../../types'

import { LayoutMenu } from './index'

test('LayoutMenu renders a component with a major diatonic layout selected', () => {
  const menuProps = {
    activeDisplayMode: DisplayModes.Degree,
    setActiveDisplayMode: jest.fn(),
  }
  const { getByText } = render(<LayoutMenu {...menuProps} />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeTruthy()
})

test('LayoutMenu renders a component with Degree DisplayMode selected', () => {
  const menuProps = {
    activeDisplayMode: DisplayModes.Degree,
    setActiveDisplayMode: jest.fn(),
  }
  const { getByText } = render(<LayoutMenu {...menuProps} />)

  expect(getByText(DisplayModes.Degree)).toBeTruthy()
})
