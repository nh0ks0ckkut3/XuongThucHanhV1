import React from "react";
import ShopScreen from "../../screen/ShopScreen";
import ExploreScreen from '../../screen/ExploreScreen'
import CartScreen from "../../screen/CartScreen";
import { AccountStack } from "../navStackAccount/AccountStack"
import AccountScreen from "../../screen/AccountScreen";
import { Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


// creat a enum:
export enum ProductScreenEnum {
    ShopScreen = 'ShopScreen',
    ExploreScreen = 'ExploreScreen',
    CartScreen = 'CartScreen',
    AccountStack = 'AccountStack'
}

export type ProductRootBottomTabParams = {
    ShopScreen: undefined;
    ExploreScreen: undefined;
    CartScreen : undefined;
    AccountStack : undefined
}

// creat a type
export const ProductRootBottomTabScreens : any[] = [

    {
        id : 1, name: ProductScreenEnum.ShopScreen,
        component : ShopScreen , option: { headerShown: false, tabBarLabel: 'Shop',
        tabBarIcon: ({color,size}) => <Icon name="user" size={size} color={color}/>,
    }
    },
    {
        id : 2, name: ProductScreenEnum.ExploreScreen,
        component : ExploreScreen , option: { headerShown: false, tabBarLabel: 'Explore',
        tabBarIcon: ({color,size}) => <Icon name="heart" size={size} color={color}/>}
    },
    {
        id : 3, name: ProductScreenEnum.CartScreen,
        component : CartScreen , option: { headerShown: false, tabBarLabel: 'Cart',
        tabBarIcon: ({color,size}) => <Icon name="tag" size={size} color={color}/>}
    },
    {
        id : 4, name: ProductScreenEnum.AccountStack,
        component : AccountStack , option: { headerShown: false, tabBarLabel: 'Account',
        tabBarIcon: ({color,size}) => <Icon name="user" size={size} color={color}/>}
    },

]
