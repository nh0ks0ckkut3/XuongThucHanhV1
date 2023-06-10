/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../style/style_screen1';
import BtnBack from '../component/BtnBack';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from '../navigation/NavStackUser/UserRootStackParams'


type SignUpScreenProp = StackNavigationProp<UserRootStackParams, UserScreenEnum.SignUpScreen>;



const SignUpScreen = (): React.JSX.Element => {

  const navigation = useNavigation<SignUpScreenProp>();

  return (
    <View style={styles.container}>
      {/* <Image style={styles.return} source={require('../hinh/Arrow.png')}></Image> */}

      <BtnBack navigation={navigation} />

      <Text style={styles.sign_up}>Sign Up</Text>
      <View style={styles.viewImage}>
        <Image source={require('../hinh/vector.png')}></Image>
        <Image style={styles.outside} source={require('../hinh/outside.png')}></Image>
        <Image style={styles.inside} source={require('../hinh/inside.png')}></Image>
        <Image style={styles.keyboard} source={require('../hinh/keyboard.png')}></Image>
        <Image style={styles.below} source={require('../hinh/below.png')}></Image>
      </View>
      <View style={styles.surName}>
        <TouchableOpacity>
          <TextInput placeholderTextColor={'#AC8E71'} placeholder='Name Surname'></TextInput>
        </TouchableOpacity>
      </View>
      <View style={[styles.surName, { marginTop: 16 }]}>
        <TouchableOpacity>
          <TextInput placeholderTextColor={'#AC8E71'} placeholder='Phone Number'></TextInput>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        We need to verify you. We will send you a one time {'\n'}verification code.
      </Text>
      <Pressable style = {styles.viewNext} onPress={() =>{
        navigation.navigate(UserScreenEnum.SignPassScreen);
      }}>
          <Text style = {styles.textNext}>Next</Text>
      </Pressable>
        <View style = {styles.accLogin}>
            <Text style = {{color: '#7F4E1D'}}>Already have an account?</Text>
            <Text style = {{color: '#FF5E00', marginLeft: 5}}>Login</Text>
        </View>
    </View>
  );
}

export default SignUpScreen;



