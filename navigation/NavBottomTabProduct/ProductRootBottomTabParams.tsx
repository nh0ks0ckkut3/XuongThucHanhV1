import React from "react";
import ShopScreen from "../../screen/ShopScreen";
import ExploreScreen from '../../screen/ExploreScreen'
import { Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


// creat a enum:
export enum ProductScreenEnum {
    ShopScreen = 'ShopScreen',
    ExploreScreen = 'ExploreScreen'

}

export type ProductRootBottomTabParams = {
    ShopScreen: undefined;
    ExploreScreen: undefined;
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
    }

]
