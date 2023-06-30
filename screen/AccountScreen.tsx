import { StyleSheet, Text, Pressable, ToastAndroid, Image, View } from 'react-native'
import React from 'react'
import { AccountStack } from '../navigation/navStackAccount/AccountStack'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { UserStack } from '../navigation/NavStackUser/UserStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountRootStackParams, AcconuntScreenEnum } from '../navigation/navStackAccount/AccountRootStackParams';
import BtnBack from '../component/BtnBack';
import font from '../contains/font';
import color from '../contains/color';

type AccountScreenProp = StackNavigationProp<AccountRootStackParams, AcconuntScreenEnum.AccountScreen>;

const AccountScreen = () => {
    const navigation = useNavigation<AccountScreenProp>();
    return (
        <SafeAreaView style={styles.container}>
            <BtnBack />
            <View style={{ paddingHorizontal: 21 }} >
                <Text style={styles.textTitle}>Account</Text>
                <Pressable style={styles.item} onPress={() => navigateGoto("ProfileScreen")}>
                    <View style={styles.icon}>
                        <Image source={require('../images/user.png')}></Image>
                    </View>

                    <Text style={styles.text}>Profile</Text>
                </Pressable>
                <Pressable style={styles.item} onPress={() => navigateGoto("OrdersScreen")}>
                    <View style={styles.icon}>
                        <Image source={require('../images/oders.png')}></Image>
                    </View>
                    <Text style={styles.text}>Oders</Text>
                </Pressable>
                <Pressable style={styles.item} onPress={() => navigateGoto("AddressScreen")}>
                    <View style={styles.icon}>
                        <Image source={require('../images/address.png')}></Image></View>
                    <Text style={styles.text}>Address</Text>
                </Pressable>
                <Pressable style={styles.item} onPress={() => navigateGoto("PaymentScreen")}>
                    <View style={styles.icon}>
                        <Image source={require('../images/payment.png')}></Image></View>
                    <Text style={styles.text}>Payment</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
    function navigateGoto(nameScreen : string) {
        navigation.navigate(nameScreen)
    }
}

export default AccountScreen



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        fontFamily: font.fontFamily_primary,
        fontWeight: '700',
        fontSize: 24,
        letterSpacing: 0.41,
        color: color.primary,
        textAlign: 'center',
        marginTop: 1.5,
        marginBottom: 50
    },
    item: {
        flexDirection: 'row',
        marginBottom: 35
    },
    icon: {
        width: 32,
    },
    text: {
        fontFamily: font.fontFamily_primary,
        fontWeight: '700',
        color: color.saddlebrown,
        letterSpacing: 0.09,
        fontSize: 18,
        marginStart: 20
    }
})