import React from 'react'
import { Image, Text, View} from 'react-native'
import styles from '../style/welcomeStyle';
import SignInstyles from '../style/LoginStyle';
import BtnLargerSize from '../component/BtnLargerSize';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from '../navigation/NavStackUser/UserRootStackParams'

type WelComeScreenProp = StackNavigationProp<UserRootStackParams, UserScreenEnum.WelComeScreen>;

const WelComeScreen = (): React.JSX.Element => {

  const navigation = useNavigation<WelComeScreenProp>();
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image style={SignInstyles.bgCloud} source={require('../images/bg_cloud.png')} />
            <Image style={styles.leaf} source={require('../images/leaf.png')} />
            <Image style={styles.orange} source={require('../images/orange.png')} />
            <Image style={styles.armLeft} source={require('../images/arm_left.png')} />
            <Image style={styles.shouder} source={require('../images/shouder.png')} />
            <Image style={styles.hairBun} source={require('../images/hair_bun.png')} />
            <Image style={styles.hair} source={require('../images/hair.png')} />
            <Image style={styles.leg} source={require('../images/leg.png')} />
            <Image style={styles.face} source={require('../images/face.png')} />
            <Image style={styles.armRingt} source={require('../images/arm_right.png')} />
            <Image style={styles.footLeft} source={require('../images/foot_left.png')} />
            <Image style={styles.footRight} source={require('../images/foot_right.png')} />
            <Image style={styles.vector20} source={require('../images/vector20.png')} />
            <Image style={styles.vector21} source={require('../images/vector21.png')} />
            <Image style={styles.orangeFall} source={require('../images/orange.png')} />
            <Image style={styles.vector19} source={require('../images/vector19.png')} />
            <Image style={styles.vector18} source={require('../images/vector18.png')} />
            
            
            <Image style={styles.vector13} source={require('../images/vector13.png')} />
            <Image style={styles.vector14} source={require('../images/vector14.png')} />
            <Image style={styles.vector15} source={require('../images/vector15.png')} />
            <Image style={styles.vector16} source={require('../images/vector16.png')} />
            <Image style={styles.vector17} source={require('../images/vector17.png')} />
            
            <Image style={styles.vector22} source={require('../images/vector22.png')} />
            <Image style={styles.vector23} source={require('../images/vector23.png')} />
            <Image style={styles.ellipse40} source={require('../images/ellipse40.png')} />
            <Image style={styles.ellipse36} source={require('../images/ellipse36.png')} />
            <Image style={styles.ellipse38} source={require('../images/ellipse38.png')} />
            <Image style={styles.ellipse30} source={require('../images/ellipse30.png')} />
            <Image style={styles.ellipse29} source={require('../images/ellipse29.png')} />
            <Image style={styles.ellipse28} source={require('../images/ellipse28.png')} />
            <Image style={styles.ellipse37} source={require('../images/ellipse37.png')} />
            <Image style={styles.ellipse27} source={require('../images/ellipse27.png')} />
            <Image style={styles.ellipse43} source={require('../images/ellipse43.png')} />
            <Image style={styles.ellipse26} source={require('../images/ellipse26.png')} />
            <Image style={styles.ellipse42} source={require('../images/ellipse42.png')} />
            <Image style={styles.ellipse35} source={require('../images/ellipse35.png')} />
            <Image style={styles.ellipse25} source={require('../images/ellipse25.png')} />
            <Image style={styles.ellipse41} source={require('../images/ellipse41.png')} />
            <Image style={styles.ellipse34} source={require('../images/ellipse34.png')} />
            <Image style={styles.ellipse33} source={require('../images/ellipse33.png')} />
            <Image style={styles.ellipse24} source={require('../images/ellipse24.png')} />
            <Image style={styles.ellipse39} source={require('../images/ellipse39.png')} />
            <Image style={styles.ellipse32} source={require('../images/ellipse32.png')} />
            <Image style={styles.ellipse23} source={require('../images/ellipse23.png')} />
            <Image style={styles.ellipse31} source={require('../images/ellipse31.png')} />
            <Image style={styles.ellipse22} source={require('../images/ellipse22.png')} />
            <Image style={styles.ellipse21} source={require('../images/ellipse21.png')} />

            <Image style={styles.binLeft} source={require('../images/bin_left.png')} />
            <Image style={styles.binRight} source={require('../images/bin_right.png')} />
            <Image style={styles.ellipse18} source={require('../images/ellipse18.png')} />
            <Image style={styles.ellipse19} source={require('../images/ellipse19.png')} />
            <Image style={styles.vector27} source={require('../images/vector27.png')} />

            <Image style={styles.vector12} source={require('../images/vector12.png')} />
        </View>
        <View style={styles.viewRelax}>
          <Text style={styles.textRelax}>Realax and shop</Text>
        </View>
        <View style={styles.viewTextNomal}>
          <Text style={styles.textNomal}>
            Shop online and get grocories
            delivered from stores to your home
            in as fast as 1 hour .</Text>
        </View>
      
      <BtnLargerSize text={'Sign Up'} colorBackground={'#FF5E00'} colorText={'#FFFFFF'} link={UserScreenEnum.SignUpScreen} marginTop={51} navigation={navigation}/>
      <BtnLargerSize text={'Sign in'} colorBackground={'#FFFFFF'} colorText={'#FF5E00'} link={UserScreenEnum.LoginScreen} marginTop={16} navigation={navigation}/>
      
      
    </View>
  )
}

export default WelComeScreen