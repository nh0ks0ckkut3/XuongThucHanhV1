import { StyleSheet, Text, View, SafeAreaView, Pressable, useWindowDimensions, Dimensions, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import BtnBack from '../component/BtnBack'
import font from '../contains/font'
import color from '../contains/color'
import OngoingScreen from './OngoingScreen'
import HistoryScreen from './HistoryScreen'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarIndicator, TabBarItem, TabView } from 'react-native-tab-view'
import { TabActions, TabRouter } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();



function MyTabs() {
  const [tabActice1, setTabActive1] = useState(false)
  const [tabActice2, setTabActive2] = useState(true)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.saddlebrown,
        tabBarIndicatorStyle: styles.test,
        tabBarPressColor: color.white,
        tabBarLabelStyle: { fontSize: 20, textTransform: 'none', fontFamily: font.fontFamily_primary },
        tabBarItemStyle: {
          width: 120,
          borderBottomColor: color.primary
        },
        tabBarGap: ((Dimensions.get('window').width - 240)/3),
        tabBarStyle: { backgroundColor: color.white, paddingStart: ((Dimensions.get('window').width - 240)/3) },
      }}>
      <Tab.Screen name="Ongoing" component={OngoingScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}
const OrdersScreen = () => {


  return (
    <View style={styles.container}>
      <BtnBack />
      <Text style={styles.textTitle}>Orders</Text>
      <MyTabs />
    </View>
  );
}

export default OrdersScreen

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
    marginBottom: 28
  },
  test: {
    backgroundColor: color.primary,
    marginStart: 70,
    width: 88,
    height: 2,
  },

})