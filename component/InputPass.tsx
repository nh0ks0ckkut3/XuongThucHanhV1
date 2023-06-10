import React from 'react'
import { Image, KeyboardAvoidingView, Platform, TextInput, Text, View, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import color from '../contains/color';
import font from '../contains/font'

type test = {
    text : string;
}
const InputPass: React.FC<test> = ( {text} ) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={30}
            style={styles.lock_input_eye}
        >
            <Image style={styles.lock} source={require('../images/lock.png')} />

            <TextInput
                style={styles.input}
                placeholder={text}
                secureTextEntry={true}
            />
            <Image style={styles.eye} source={require('../images/eye_hide_show.png')} />

        </KeyboardAvoidingView>
    )
}


export default InputPass;

const styles = StyleSheet.create({
    lock_input_eye : {
        flexDirection : 'row',
        marginHorizontal : 16,
        marginTop : 16,
        backgroundColor : color.bg_input,
        width : 343,
        height : 48,
        borderRadius : 5,
        position : 'relative'
      },
      lock : {
        marginLeft : 12,
        marginTop : 14
      },
      input : {
        width : 247,
        height : '100%',
        marginLeft : 21,
        fontFamily : font.fontFamily_primary,
        fontWeight : '400',
        fontSize : 16,
        lineHeight : 19.2,
        color : color.text_input,
        marginEnd : 15
      },
      eye : {
        marginEnd : 13,
        marginTop : 16
      }
} 
)