import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native';
import color from '../contains/color'
import styles from '../style/MyCartStyle';
import BtnBack from '../component/BtnBack';




const MyCartScreen = (): React.JSX.Element => {
    
  return (
    <View style = {styles.container}>
        <View style = {styles.viewArrow}>
          <Image style = {styles.imgArrow} source={require('../images/arrow2.png')}/>
          <Image style = {styles.imgGroup} source={require('../images/add.png')}/>
        </View>
        <Text style = {styles.textTitle}>My Cards</Text>
        <View style = {styles.viewVector}>
            <Image style={styles.bgCloud} source={require('../images/bg_cloud.png')} />
            <Image style = {styles.imgVector1} source={require('../img_mycart/Vector1.png')}/>
            
            <Image style = {styles.imgVector3} source={require('../img_mycart/Vector3.png')}/>
            <Image style = {styles.imgVector4} source={require('../img_mycart/Vector4.png')}/>
            <Image style = {styles.imgVector2} source={require('../img_mycart/Vector2.png')}/>
            <Image style = {styles.imgVector5} source={require('../img_mycart/Vector5.png')}/>
        </View>
        <Text style = {styles.textCard}>No Saved Card</Text>
        <Text style = {styles.text}> You can save your card info to make{'\n'}purchase easier, faster.</Text>
    </View>
  )
}
export default MyCartScreen