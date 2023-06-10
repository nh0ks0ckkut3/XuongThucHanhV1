import React from "react";
import { TextInput, TouchableOpacity} from 'react-native';
import { StyleSheet } from "react-native";
import color from '../contains/color'
const TextInputVerify = () => {
    return (
            <TouchableOpacity style={styles.inputcode}>
                <TextInput style={styles.input}>
                </TextInput>
            </TouchableOpacity> 
    )
}

export default TextInputVerify;

const styles = StyleSheet.create({
    inputcode: {
        borderBottomWidth: 3,
        borderBottomColor: color.text,
        width: 50,
        fontSize: 25,
        marginRight : 20,
        
    },
    input : {
        color : color.text_input,
        fontSize : 23,
        fontWeight : '700'
    }
})