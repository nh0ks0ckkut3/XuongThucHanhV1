import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountRootStackParams, AcconuntScreenEnum } from '../navigation/navStackAccount/AccountRootStackParams';



type ProfileScreenProp = StackNavigationProp<AccountRootStackParams, AcconuntScreenEnum.ProfileScreen>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenProp>();
  return (
    <View>
      <Pressable onPress={() => navigateGoto("MyCartScreen")}>
        <Text>go to My Cart</Text>
      </Pressable>
    </View>
  )
  function navigateGoto(nameScreen : string) {
    navigation.navigate(nameScreen)
  }
}


export default ProfileScreen

const styles = StyleSheet.create({})