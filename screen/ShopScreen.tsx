import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProductBottomTab } from '../navigation/NavBottomTabProduct/ProductBottomTab'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProductRootBottomTabParams, ProductScreenEnum } from '../navigation/NavBottomTabProduct/ProductRootBottomTabParams'
import color from '../contains/color'

type ShopScreenProp = BottomTabNavigationProp<ProductRootBottomTabParams, ProductScreenEnum.ShopScreen>;
const ShopScreen = (): React.JSX.Element => {
  const navigation = useNavigation<ShopScreenProp>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  )
}
export default ShopScreen