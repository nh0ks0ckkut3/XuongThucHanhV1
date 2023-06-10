import font from '../contains/font'
import color from '../contains/color'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
    },
    return: {
      marginLeft: 20,
      marginTop: 20.5
    },
    sign_up: {
      fontSize: 24,
      fontWeight: '700',
      color: color.primary,
      fontFamily: font.fontFamily_primary,
      marginTop: 0.5,
      textAlign: 'center',
    },
    viewImage: {
      position: 'relative',
      width: 302,
      height: 270,
      // backgroundColor: 'lightblue',
      marginLeft: 56,
      marginTop: 10
    },
    outside: {
      position: 'absolute',
      top: 63.52,
      left: 95.07,
    },
    inside: {
      position: 'absolute',
      top: 68.89,
      left: 101.27,
    },
    keyboard: {
      position: 'absolute',
      top: 164.25,
      left: 129.25
    },
    below: {
      position: 'absolute',
      top: 246,
      left: 53
    },
    surName: {
      backgroundColor: color.bg_input,
      marginLeft: 16,
      marginRight: 16,
      paddingLeft: 27,
      marginTop: 21
    },
    text: {
      fontFamily: font.fontFamily_primary,
      fontWeight: '400',
      fontSize: 16,
      color: color.text,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 10
    },
    viewNext: {
      backgroundColor: color.primary,
      borderRadius: 30,
      width: 370,
      height: 50,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 26
    },
    textNext:{
      color: color.white,
      fontFamily: font.fontFamily_primary,
      fontWeight: '700',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10
    },
    accLogin:{
      flexDirection: 'row',
      marginTop: 10,
      justifyContent : 'center'
    },
  
  });
  export default styles;