import { StyleSheet } from 'react-native';
import font from '../contains/font'
import color from '../contains/color'
const styles = StyleSheet.create({

    vectorHidePass : {
        position : 'absolute',
        left : 125.64,
        top : 175.29,
        zIndex : 10,
    },
    groupVector : {
        width : 315,
        height : 273,
        position : 'relative',
        top : 7,
        left : 30,
      },
      casePhone : {
        zIndex : 10,
        position : 'absolute',
        top : 58.89,
        left : 95.57
      },
      phone : {
        zIndex : 10,
        position : 'absolute',
        top : 64.54,
        left : 102.07
      },
    vectorNonePass : {
        position : 'absolute',
        left : 130.31,
        top : 199.68,
        zIndex : 10,
    },
    pointPass1 : {
        position : 'absolute',
        left : 136.96,
        top : 188.08,
        zIndex : 10,
    },
    pointPass2 : {
        position : 'absolute',
        left : 147.73,
        top : 186.4,
        zIndex : 10,
    },
    pointPass3 : {
        position : 'absolute',
        left : 158.55,
        top : 184.7,
        zIndex : 10,
    },
    pointPass4 : {
        position : 'absolute',
        left : 169.36,
        top : 183.03,
        zIndex : 10,
    },
    pointPass5 : {
        position : 'absolute',
        left : 180.16,
        top : 181.31,
        zIndex : 10,
    },
    bodyLock : {
        position : 'absolute',
        left : 155.8,
        top : 205.15,
        zIndex : 10,
    },
    headerLock : {
        position : 'absolute',
        left : 154.94,
        top : 196.06,
        zIndex : 10,
    },
    btnFake : {
        position : 'absolute',
        left : 146.95,
        top : 225.46,
        zIndex : 10,
    },
    viewTextBig : {
        marginTop : 71,
        marginLeft : 16
    },
    textBig : {
        color: color.text,
        fontWeight : '700',
        fontSize : 20,
        lineHeight : 24,
        fontFamily : font.fontFamily_primary
    },
    viewTextNormal : {
        marginStart : 18,
        marginEnd : 45,
        marginTop : 12,
    },
    textNormal : {
        color: color.text,
        fontFamily : font.fontFamily_primary,
        fontStyle : 'normal',
        fontWeight : '400',
        fontSize : 16,
        lineHeight : 19
    }


})
export default styles