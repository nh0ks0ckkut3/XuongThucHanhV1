import { StyleSheet } from 'react-native';
import font from '../contains/font'
import color from '../contains/color'
const SignInstyles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : color.white
    },
    
    
    textTitle : {
        fontFamily : font.fontFamily_primary,
        fontWeight : '700',
        fontSize : 24,
        letterSpacing : 0.41,
        color : color.primary,
        textAlign : 'center',
        marginTop : 1.5,
    },
    
    groupVector : {
      width : 301,
      height : 272,
      position : 'relative',
      top : 12,
      left : 40,
    },
    bgCloud : {
      position : 'absolute',
      top : 0,
      zIndex : 15
    },
    bgShadowPhone : {
      position : 'absolute',
      bottom : 0,
      left : 61,
      zIndex : 1
    },
    casePhone : {
      zIndex : 10,
      position : 'absolute',
      top : 61,
      left : 93
    },
    phone : {
      zIndex : 10,
      position : 'absolute',
      top : 65.8,
      left : 99
    },
    innerPhone : {
      zIndex : 10,
      position : 'absolute',
      top : 122.28,
      left : 122.2
    },
    bodyKey : {
      position : 'absolute',
      zIndex : 10,
      top : 152.5,
      left : 138.22
    },
    rootKey : {
      position : 'absolute',
      zIndex : 10,
      top : 132.99,
      left : 184.1
    },
    teethKey : {
      position : 'absolute',
      zIndex : 10,
      top : 167.15,
      left : 145.36
    },
    
    content : {
      marginTop: 46,
      marginLeft: 16,
      fontFamily: font.fontFamily_primary,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 18,
      lineHeight: 26,
      letterSpacing: 0.41,
      color: '#6D3805'
    },
    flag_inputPhone : {
      marginTop : 13,
      marginLeft : 16,
      width : 343,
      height : 48,
      backgroundColor : color.bg_input,
      borderRadius : 5,
      paddingHorizontal: 12,
      flexDirection : 'row',
      paddingVertical : 11
    },
    icSortDown : {
      marginTop : -5,
      marginLeft : 12,
      marginEnd : 20
    },
    inputPhone : {
      color : color.text_input,
      width : '70%',
      height : 48,
      marginTop : -11,
      fontFamily : font.fontFamily_primary,
      fontWeight : '400',
      fontSize : 15,
      paddingHorizontal : 14
    },
    inputPass_eye : {
      position : 'relative',
      marginTop : 16,
      marginLeft : 16,
      width : 343,
      height : 48,
      backgroundColor : color.bg_input,
      borderRadius : 5,
      flexDirection : 'row',
      paddingLeft : 27,
      paddingEnd : 13.5
    },
    inputPass : {
      width : '89%',
      height : 48,
      fontFamily : font.fontFamily_primary,
      fontSize : 17,
      fontWeight : '400',
      color : color.text_input,
    },
    eye : {
      position : 'absolute',
      right : 12.75,
      top : 19.5
    },
    innerEye : {
      position : 'absolute',
      right : 21,
      top : 24
    },
    
    div_txtForgotePassword : {
      paddingStart : 236,
      paddingEnd : 23,
      paddingTop : 5,
    },
    txtForgotePassword : {
      width : 117,
      height : 17,
      color : color.primary,
      fontFamily : font.fontFamily_primary,
      fontWeight : '400',
      fontSize : 14,
      lineHeight : 16.8
    },
    
    textStartSignUp : {
      flexDirection : 'row',
      justifyContent : 'center',
      marginTop : 13
    },
    txtNormal : {
      fontFamily: font.fontFamily_primary,
      fontStyle : 'normal',
      fontWeight : '400',
      fontSize : 16,
      lineHeight : 19,
      color : color.text
    },
    txtSignUp : {
      color : color.primary,
    }
  })
  export default SignInstyles