import React from "react";
import ProfileScreen from "../../screen/ProfileScreen";
import OrdersScreen from '../../screen/OrdersScreen'
import AddressScreen from "../../screen/AddressScreen";
import PaymentScreen from "../../screen/PaymentScreen";
import AccountScreen from "../../screen/AccountScreen";
import MyCartScreen from "../../screen/MyCartScreen";
// creat a enum:
export enum AcconuntScreenEnum {
    ProfileScreen = 'ProfileScreen',
    OrdersScreen = 'OrdersScreen',
    AddressScreen = 'AddressScreen',
    PaymentScreen = 'PaymentScreen',
    AccountScreen = 'AccountScreen',
    MyCartScreen = 'MyCartScreen'
}

export type AccountRootStackParams = {
    ProfileScreen: undefined;
    OrdersScreen: undefined;
    AddressScreen: undefined;
    PaymentScreen: undefined;
    AccountScreen: undefined;
    MyCartScreen: undefined;
}

// creat a type
export const AccountRootStackScreens : any[] = [

    {
        id : 1, name: AcconuntScreenEnum.AccountScreen,
        component : AccountScreen , option: { headerShown: false}
    },

    {
        id : 2, name: AcconuntScreenEnum.ProfileScreen,
        component : ProfileScreen , option: { headerShown: false}
    },
    {
        id : 3, name: AcconuntScreenEnum.OrdersScreen,
        component : OrdersScreen , option: { headerShown: false}
    },
    {
        id : 4, name: AcconuntScreenEnum.AddressScreen,
        component : AddressScreen , option: { headerShown: false}
    },
    {
        id : 5, name: AcconuntScreenEnum.PaymentScreen,
        component : PaymentScreen , option: { headerShown: false}
    },
    {
        id : 6, name: AcconuntScreenEnum.MyCartScreen,
        component : MyCartScreen , option: { headerShown: false}
    },
    

]
