import React from 'react'
import {Image, Text, View} from 'react-native'
import styles from '../style/welcomeStyle';
import SignInstyles from '../style/LoginStyle';
import BtnLargerSize from '../component/BtnLargerSize';
import BtnBack from '../component/BtnBack';
import SignUpStyle from '../style/SignUpStyle';
import InputPass from '../component/InputPass';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from '../navigation/NavStackUser/UserRootStackParams'


type SignPassScreenProp = StackNavigationProp<UserRootStackParams, UserScreenEnum.SignPassScreen>;




const SignPassScreen = (): React.JSX.Element => {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const navigation = useNavigation<SignPassScreenProp>();

    return (
        <View style={styles.container}>
            <BtnBack navigation={navigation}/>
            <Text style={SignInstyles.textTitle}>Sign Up</Text>
        
            <View style={SignUpStyle.groupVector}>
                <Image style={SignInstyles.bgCloud} source={require('../images/bg_cloud.png')} />
                <Image style={SignInstyles.bgShadowPhone} source={require('../images/bg_shadow_phone.png')} />
                <Image style={SignUpStyle.casePhone} source={require('../images/case_phone_small.png')} />
                <Image style={SignUpStyle.phone} source={require('../images/phone_small.png')} />
                <Image style={SignUpStyle.vectorHidePass} source={require('../images/vector_hide_pass.png')} />
                <Image style={SignUpStyle.pointPass1} source={require('../images/point_pass.png')} />
                <Image style={SignUpStyle.pointPass2} source={require('../images/point_pass.png')} />
                <Image style={SignUpStyle.pointPass3} source={require('../images/point_pass.png')} />
                <Image style={SignUpStyle.pointPass4} source={require('../images/point_pass.png')} />
                <Image style={SignUpStyle.pointPass5} source={require('../images/point_pass.png')} />
                <Image style={SignUpStyle.vectorNonePass} source={require('../images/vector_hide_pass.png')} />
                <Image style={SignUpStyle.bodyLock} source={require('../images/body_lock.png')} />
                <Image style={SignUpStyle.headerLock} source={require('../images/header_lock.png')} />
                <Image style={SignUpStyle.btnFake} source={require('../images/btnFake.png')} />
            </View>

            <View style={SignUpStyle.viewTextBig}>
            <Text style={SignUpStyle.textBig}>Enter the password</Text>
            </View>
            <View style={SignUpStyle.viewTextNormal}>
                <Text style={SignUpStyle.textNormal}>
                    For the security & safety please choose a{'\n'}password
                </Text>
            </View>

            <InputPass text="Password" />
            <InputPass text="Confirm Password" />
            
            <BtnLargerSize text={'Next'} colorBackground={'#FF5E00'} colorText={'#FFFFFF'} link={UserScreenEnum.SignCodeScreen} marginTop={17} navigation={navigation}/>
    </View>
    )
}

export default SignPassScreen