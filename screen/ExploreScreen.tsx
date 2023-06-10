import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import color from '../contains/color'

const ExploreScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <Text>Explore Screen</Text>
    </SafeAreaView>
  )
}
export default ExploreScreen