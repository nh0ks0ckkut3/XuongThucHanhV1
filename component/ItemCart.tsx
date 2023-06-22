import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../contains/color'
import font from '../contains/font';


const ItemCart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewImage}>
                <Image source={require('../images/apple.png')} />
            </View>
            <View style={styles.viewDetail}>
                <Text style={styles.textNameProd}>Red Apple</Text>
                <View style={styles.quantity}>
                    <View style={styles.minus}>
                        <Text style={styles.textMinusPlus}>-</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        >2</TextInput>
                    <View style={styles.plus}>
                    <Text style={styles.textMinusPlus}>+</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewPrice}>
            <Text style={styles.price}>$</Text>
            <Text style={styles.price}>4,99</Text>
            <Text style={styles.symbolUnit}>kg</Text>
            </View>
        </View>
    )
}
export default ItemCart;

const styles = StyleSheet.create({
    container: {
        height : 90,
        marginHorizontal: 16,
        flexDirection : 'row',
        borderBottomColor : color.bg_input,
        borderBottomWidth : 1
    },
    viewImage: {
        width : "25%"
    },
    viewDetail : {
        width : "50%",
    },
    viewPrice : {
        width : "25%",
        flexDirection : 'row',
        justifyContent : 'flex-end',
        
    },
    textNameProd : {
        paddingStart: 8,
        fontSize : 18,
        fontFamily : font.fontFamily_primary,
        fontWeight : "700",
        color : color.saddlebrown ,
        paddingTop : 8,
    },
    
    price : {
        fontSize : 18,
        color : color.saddlebrown,
        fontFamily : font.fontFamily_primary,
        marginTop : 55
    },
    symbolUnit : {
        fontSize : 11,
        color : color.saddlebrown,
        fontFamily : font.fontFamily_primary,
        marginTop : 62,
        marginStart: 5
    },
    quantity : {
        flexDirection : 'row',
        backgroundColor : color.bg_input,
        width : 98,
        height : 30,
        borderRadius : 24,
        paddingTop : 3,
        marginStart : 30,
        marginTop : 17,
        marginBottom : 10,
        justifyContent : 'space-evenly'
    },
    minus : {
        paddingTop : -5
    },
    textMinusPlus : {
        backgroundColor : color.white,
        width : 24,
        height : 24,
        borderRadius : 24,
        fontFamily : font.fontFamily_primary,
        fontSize : 18,
        color : color.saddlebrown,
        textAlign : 'center',
        paddingBottom : 0
    },
    input : {
        fontFamily : font.fontFamily_primary,
        fontSize : 18,
        color : color.saddlebrown,
        marginTop : -3,
        textAlign : 'center',
        paddingTop : 3,
        paddingBottom : 0
    },
    plus : {
        
    },
})