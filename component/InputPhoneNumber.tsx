import React from 'react'
import { Image, KeyboardAvoidingView, Platform, TextInput, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../contains/color';
import font from '../contains/font'

const test : [number:number, onChangeNumber:Function] = React.useState('');
const InputPhoneNumber: React.FC<test> = ( {number,onChangeNumber} ) => {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset = {10}
          style={styles.flag_inputPhone}>
          <TouchableOpacity
              onPress={() => {
                // to-do here
              }}
            >
              <Image source={require('../images/Sweden_flag.png')} />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                // to-do here
              }}
            >
              <Text style={styles.icSortDown}><Icon name="sort-down" size={18} color="#828282"/></Text>
          </TouchableOpacity>
        
          <TextInput
            style={styles.inputPhone}
            onChangeText={number => onChangeNumber(number)}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
        </KeyboardAvoidingView>
    )
}


export default InputPhoneNumber;

const styles = StyleSheet.create({
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
} 
)