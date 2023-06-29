import React from "react";
import {Text, Image, View} from "react-native";
import styles from "../style/AccountStyles";

const ProfileScreen = (): React.JSX.Element => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.imgArrow} source={require('../img_account/Arrow.png')}></Image>
            <Text style = {styles.textTitle}>Edit Profile</Text>
            <View style = {styles.viewUser}>
                <Image style = {styles.imgUser} source={require('../img_account/user.png')}/>
                <Text style = {styles.textUser}>Edit Profile</Text>
                <Image style = {styles.imgBackArrow} source={require('../img_account/backarrow.png')}/>
            </View>
            <View style = {styles.viewKey}>
                <Image style = {styles.imgKey} source={require('../img_account/key.png')}/>
                <Text style = {styles.textKey}>Change Password</Text>
                <Image style = {styles.imgBackArrow_Key} source={require('../img_account/backarrow.png')}/>
            </View>
            <View style = {styles.viewCart}>
                <Image style = {styles.imgCart} source={require('../img_account/cart.png')}/>
                <Text style = {styles.textCart}>My Cards</Text>
                <Image style = {styles.imgBackArrow_Cart} source={require('../img_account/backarrow.png')}/>
            </View>
            <Text style = {styles.textApp}>App Settings</Text>
            <View style = {styles.viewBell}>
                <Image style = {styles.imgBell} source={require('../img_account/bell.png')}/>
                <Text style = {styles.textBell}>Notifications</Text>
                <Image style = {styles.imgContainer} source={require('../img_account/Container.png')}/>
            </View>

            <View style = {styles.viewLanguage}>
                <Image style = {styles.imgLanguage} source={require('../img_account/language.png')}/>
                <Text style = {styles.textLanguage}>Language</Text>
                <Text style = {styles.textEnglish}>English</Text>
                <Image style = {styles.imgBackArrow_Language} source={require('../img_account/backarrow.png')}/>
            </View> 
            <View style = {styles.viewLogout}>
                <Image style = {styles.imgLogout} source={require('../img_account/logout.png')}/>
                <Text style = {styles.textLogout}>Logout</Text>
            </View> 
        </View>
    )
}
export default ProfileScreen
