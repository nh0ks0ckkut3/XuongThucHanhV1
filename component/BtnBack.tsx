import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../contains/color'

const BtnBack = (props) => {
  return (
    <View style={styles.div_arrow}>
          <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <Text style={styles.arrow}><Icon name="chevron-left" size={18}/></Text>
          </TouchableOpacity>
        </View>
  )
}

export default BtnBack;
const styles = StyleSheet.create({
  div_arrow : {
    paddingTop : 24.5,
    paddingLeft : 20,
    paddingRight : 359
  },
  arrow :{
    letterSpacing : 0.41,
    color : color.primary,
},
})