import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable, } from 'react-native'
import SignInstyles from '../style/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from '../navigation/NavStackUser/UserRootStackParams'
import BtnLargerSize from '../component/BtnLargerSize';
import BtnBack from '../component/BtnBack';


type LoginScreenProp = StackNavigationProp<UserRootStackParams, UserScreenEnum.LoginScreen>;

const LoginScreen = (): React.JSX.Element => {

  const navigation = useNavigation<LoginScreenProp>();

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={SignInstyles.container}>

      <BtnBack navigation={navigation} />

      <Text style={SignInstyles.textTitle}>Sign In</Text>

      <View style={SignInstyles.groupVector}>
        <Image style={SignInstyles.bgCloud} source={require('../images/bg_cloud.png')} />
        <Image style={SignInstyles.bgShadowPhone} source={require('../images/bg_shadow_phone.png')} />
        <Image style={SignInstyles.casePhone} source={require('../images/case_phone.png')} />
        <Image style={SignInstyles.phone} source={require('../images/phone.png')} />
        <Image style={SignInstyles.innerPhone} source={require('../images/inner_phone.png')} />
        <Image style={SignInstyles.bodyKey} source={require('../images/body_key.png')} />
        <Image style={SignInstyles.rootKey} source={require('../images/root_key.png')} />
        <Image style={SignInstyles.teethKey} source={require('../images/teeth_key.png')} />
      </View>

      <Text style={SignInstyles.content}>
        Enter your phone number and{'\n'}password to access your account
      </Text>
      {/* <InputPhoneNumber test={[number,onChangeNumber]}/> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        style={SignInstyles.flag_inputPhone}>
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
          <Text style={SignInstyles.icSortDown}><Icon name="sort-down" size={18} color="#828282" /></Text>
        </TouchableOpacity>

        <TextInput
          style={SignInstyles.inputPhone}
          onChangeText={number => onChangeNumber(number)}
          value={number}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        style={SignInstyles.inputPass_eye}>
        <TextInput
          style={SignInstyles.inputPass}
          onChangeText={password => onChangePassword(password)}
          value={password}
          placeholder="PassWord"
          secureTextEntry={true}
        />
        <Image style={SignInstyles.eye} source={require('../images/eye.png')} />
        <Image style={SignInstyles.innerEye} source={require('../images/inner_eye.png')} />
      </KeyboardAvoidingView>
      <View style={SignInstyles.div_txtForgotePassword}>
        <Pressable
          onPress={() => {
          }}
        >
          <Text style={SignInstyles.txtForgotePassword}>Forgote Password</Text>
        </Pressable>
      </View>

      <BtnLargerSize text={'Sign in'} colorBackground={'#FF5E00'} colorText={'#FFFFFF'} link={UserScreenEnum.ProductBottomTab} marginTop={43} navigation={navigation} />


      <View style={SignInstyles.textStartSignUp}>
        <Text style={SignInstyles.txtNormal}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(UserScreenEnum.SignUpScreen)
          }}
        >
          <Text style={[SignInstyles.txtNormal, SignInstyles.txtSignUp]}> Sign Up</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default LoginScreen