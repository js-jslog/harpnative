import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import { DegreeIds } from 'harpstrata'

import { colors, getSizes } from '../../styles'

const { degreeColors } = colors

export const ActivityLegend = (): React.ReactElement => {
  const sizes = getSizes()
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
  const deviceWidth = windowWidth > windowHeight ? windowWidth : windowHeight
  const styles = StyleSheet.create({
    pageFill: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    legendWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: sizes.activityLegendHeight,
    },
    colorCell: {
      width: deviceWidth / 12,
      alignItems: 'center',
      height: sizes.activityLegendHeight,
    },
    root: {
      backgroundColor: degreeColors[DegreeIds.Root],
    },
    flat2: {
      backgroundColor: degreeColors[DegreeIds.Flat2],
    },
    second: {
      backgroundColor: degreeColors[DegreeIds.Second],
    },
    flat3: {
      backgroundColor: degreeColors[DegreeIds.Flat3],
    },
    third: {
      backgroundColor: degreeColors[DegreeIds.Third],
    },
    fourth: {
      backgroundColor: degreeColors[DegreeIds.Fourth],
    },
    flat5: {
      backgroundColor: degreeColors[DegreeIds.Flat5],
    },
    fifth: {
      backgroundColor: degreeColors[DegreeIds.Fifth],
    },
    flat6: {
      backgroundColor: degreeColors[DegreeIds.Flat6],
    },
    sixth: {
      backgroundColor: degreeColors[DegreeIds.Sixth],
    },
    flat7: {
      backgroundColor: degreeColors[DegreeIds.Flat7],
    },
    seventh: {
      backgroundColor: degreeColors[DegreeIds.Seventh],
    },
  })

  return (
    <View style={styles.pageFill}>
      <View style={styles.legendWrapper}>
        <View style={[styles.colorCell, styles.root]} />
        <View style={[styles.colorCell, styles.flat2]} />
        <View style={[styles.colorCell, styles.second]} />
        <View style={[styles.colorCell, styles.flat3]} />
        <View style={[styles.colorCell, styles.third]} />
        <View style={[styles.colorCell, styles.fourth]} />
        <View style={[styles.colorCell, styles.flat5]} />
        <View style={[styles.colorCell, styles.fifth]} />
        <View style={[styles.colorCell, styles.flat6]} />
        <View style={[styles.colorCell, styles.sixth]} />
        <View style={[styles.colorCell, styles.flat7]} />
        <View style={[styles.colorCell, styles.seventh]} />
      </View>
    </View>
  )
}
