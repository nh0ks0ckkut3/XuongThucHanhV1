import React from "react";
import WelComeScreen from "../../screen/WelComeScreen";
import LoginScreen from '../../screen/LoginScreen'
import SignUpScreen from '../../screen/SignUpScreen'
import SignPassScreen from '../../screen/SignPassScreen'
import SignCodeScreen from '../../screen/SignCodeScreen'
import { ProductBottomTab } from '../NavBottomTabProduct/ProductBottomTab'

// creat a enum:
export enum UserScreenEnum {
    WelComeScreen = 'WelComeScreen',
    LoginScreen = 'LoginScreen',
    SignUpScreen = 'SignUpScreen',
    SignPassScreen = 'SignPassScreen',
    SignCodeScreen = 'SignCodeScreen',
    ProductBottomTab = 'ProductBottomTab'
}

export type UserRootStackParams = {
    WelComeScreen: undefined;
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SignPassScreen: undefined;
    SignCodeScreen: undefined;
    ProductBottomTab: undefined;
}

// creat a type
export const UserRootStackScreens : any[] = [

    {
        id : 1, name: UserScreenEnum.WelComeScreen,
        component : WelComeScreen , option: { headerShown: false}
    },
    {
        id : 2, name: UserScreenEnum.SignUpScreen,
        component : SignUpScreen , option: { headerShown: false}
    },
    {
        id : 3, name: UserScreenEnum.SignPassScreen,
        component : SignPassScreen , option: { headerShown: false}
    },
    {
        id : 4, name: UserScreenEnum.SignCodeScreen,
        component : SignCodeScreen , option: { headerShown: false}
    },
    {
        id : 5, name: UserScreenEnum.LoginScreen,
        component : LoginScreen , option: { headerShown: false}
    },
    {
        id : 6, name: UserScreenEnum.ProductBottomTab,
        component : ProductBottomTab , option: { headerShown: false}
    },

]
