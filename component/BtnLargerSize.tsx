import React from 'react'
import { Button, Image, StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import color from '../contains/color';
import font from '../contains/font'
import { useNavigation } from '@react-navigation/native'

type props = {
  text : string;
  colorBackground : string;
  colorText : string;
  link : string;
  navigation : useNavigation;
  marginTop : number;
}

const BtnLargerSize: React.FC<props> = ( {text,colorBackground,colorText,link,navigation,marginTop} ) => {
  return (
    <View style={[styles.divBtn,{marginTop:marginTop}]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(link);
            }}>
              <Text style={[styles.textButton,{backgroundColor:colorBackground},{color:colorText}]}>{text}</Text>
          </TouchableOpacity>
    </View>
  )
}
  
export default BtnLargerSize;
const styles = StyleSheet.create({
  divBtn : {
    paddingHorizontal : 16,
  },
  textButton : {
    with : 343,
    height : 50,
    borderRadius : 30,
    borderWidth : 1,
    borderColor : color.primary,
    fontSize : 17,
    fontWeight : '500',
    fontFamily: font.fontFamily_primary,
    textAlign : 'center',
    paddingVertical : 10,
  }
} 
)