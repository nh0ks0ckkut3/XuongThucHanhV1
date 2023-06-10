import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProductRootBottomTabScreens, ProductRootBottomTabParams } from "./ProductRootBottomTabParams";
import color from '../../contains/color'
import font from '../../contains/font'


export const Tab = createBottomTabNavigator<ProductRootBottomTabParams>();

export const ProductBottomTab = (): React.JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: color.primary,
      tabBarInactiveTintColor: color.saddlebrown,
      tabBarActiveBackgroundColor: color.white,
      tabBarInactiveBackgroundColor: color.white,

      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: font.font_Klarna_Sans,
        fontStyle: 'normal',
        letterSpacing: -0.165,
        lineHeight : 12,
      },
      tabBarStyle: {
        height: 68,
        paddingTop: 7,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor : '#E9E9E9',
        borderLeftColor : '#E9E9E9',
        borderRightColor : '#E9E9E9',
        position: 'absolute',
        overflow: 'hidden',
      }
    }}>
      {
        ProductRootBottomTabScreens.map((item, index) => {
          return (
            <Tab.Screen key={item.id} name={item.name}
              component={item.component} options={item.option}
            />
          )
        })
      }
    </Tab.Navigator>
  )
}