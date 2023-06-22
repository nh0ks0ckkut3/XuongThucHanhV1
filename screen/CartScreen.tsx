import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnBack from '../component/BtnBack'
import color from '../contains/color'
import font from '../contains/font'
import ItemCart from '../component/ItemCart'
import BtnLargerSize from '../component/BtnLargerSize'

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <BtnBack />
      <Text style={styles.textTitle}>Cart</Text>
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <View style={styles.viewBtn}>
        <BtnLargerSize text={'Check Out'} colorBackground={'#FF5E00'} colorText={'#FFFFFF'} link={"undefined"} marginTop={51} navigation={undefined}/>
      </View>
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  textTitle: {
    fontFamily: font.fontFamily_primary,
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.41,
    color: color.primary,
    textAlign: 'center',
    marginTop: 1.5,
    marginBottom: 19
  },
  viewBtn : {
    width : '100%',
    position : 'absolute',
    bottom : 87,
    left : 0
  }
})