import { StyleSheet } from "react-native";
import font from '../contains/font'
import color from '../contains/color'

const SigncodeStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 16,
        marginEnd: 16,//theo chieu doc
    },
    imgBack: {
        marginTop: 50,
        marginStart: 20
    },
    viewSignUp: {
        alignItems: 'center',
        marginTop: 10,
    },
    textSignUp: {
        fontFamily: font.fontFamily_primary,
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 41,
        verticalAlign: 'top',
        letterSpacing: 0.41,
        color: color.primary
    },
    viewcloudbig: {
        alignItems: 'center',
    },
    imgcloudbig: {
        tintColor: 'red',
    },
    imgvophone: {
        position: 'absolute',
        top: 65.89
    },
    imgsceenphone: {
        position: 'absolute',
        top: 71.54
    },
    imgcloudsmall: {
        alignItems: 'center',
        marginTop: 44
    },
    imgsuccess: {
        position: 'absolute',
        top: 150,
        left: 150
    },
    viewEnter: {
        marginTop: 71,
    },
    textEnter : {
        fontFamily: font.fontFamily_primary,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        color: color.text
    },
    viewSMS: {
        marginTop: 12
    },
    textSMS: {
        fontFamily: font.fontFamily_primary,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21.6,
        color: color.text
    },
    viewNext: {
        backgroundColor: color.primary,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 71
    },
    inputcode: {
        borderBottomWidth: 3,
        borderBottomColor: color.text,
        width: 50,
        fontSize: 25,
        marginStart: 10
    },
    textbtnSignup: {
        fontFamily: font.fontFamily_primary,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 22,
        color: color.white
    }
})

export default SigncodeStyle