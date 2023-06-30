import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OngoingEmpty from '../component/OngoingEmpty'
import color from '../contains/color'


const OngoingScreen = () => {
  return (
    <View style={styles.container}>
        <OngoingEmpty />
    </View>
  )
}

export default OngoingScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : color.white
  }
})