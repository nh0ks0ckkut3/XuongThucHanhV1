import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountRootStackScreens, AccountRootStackParams } from "./AccountRootStackParams";


export const Stack = createStackNavigator<AccountRootStackParams>();

export const AccountStack = (): React.JSX.Element => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                {
                    AccountRootStackScreens.map((item, index) => {
                        return (
                            <Stack.Screen key={item.id} name={item.name}
                                component={item.component} options={item.option}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}