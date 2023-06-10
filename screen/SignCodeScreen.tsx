import React from "react";
import { Image, Text, View, TouchableOpacity } from 'react-native';
import BtnBack from '../component/BtnBack'
import TextInputVerify from "../component/TextInputVerify";
import SigncodeStyle from "../style/SigncodeStyle";
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { UserRootStackParams, UserScreenEnum } from '../navigation/NavStackUser/UserRootStackParams'


type SignCodeScreenProp = StackNavigationProp<UserRootStackParams, UserScreenEnum.SignCodeScreen>;


const SignCodeScreen = (): React.JSX.Element => {

    const navigation = useNavigation<SignCodeScreenProp>();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={SigncodeStyle.container}>
                <TouchableOpacity style={SigncodeStyle.imgBack} onPress={() => { navigation.goBack() }} activeOpacity={0.5}>
                    <View>
                        <Image source={require('../assets1/Arrow.png')} />
                    </View>
                </TouchableOpacity>
                {/* <BtnBack navigation={navigation} /> */}
                <View style={SigncodeStyle.viewSignUp}>
                    <Text style={SigncodeStyle.textSignUp}>Sign Up</Text>
                </View>
                <View style={SigncodeStyle.viewcloudbig}>
                    <Image style={SigncodeStyle.imgcloudbig} source={require('../assets1/Vector.png')} />
                    <Image style={SigncodeStyle.imgvophone} source={require('../assets1/Vector2.png')}></Image>
                    <Image style={SigncodeStyle.imgsceenphone} source={require('../assets1/Vector3.png')}></Image>
                    <Image style={SigncodeStyle.imgsuccess} source={require('../assets1/Vector11.png')} />
                </View>
                <View style={SigncodeStyle.imgcloudsmall}>
                    <Image style={{ tintColor: 'red' }} source={require('../assets1/Vector10.png')}></Image>
                </View>
                <View style={SigncodeStyle.viewEnter}>
                    <Text style={SigncodeStyle.textEnter}>Enter Verification Code</Text>
                </View>
                <View style={SigncodeStyle.viewSMS}>
                    <Text style={SigncodeStyle.textSMS}>We have sent SMS to:{'\n'}046 XXX XX XX </Text>
                </View>
                <View style={{
                    marginTop : 17,
                    flexDirection: 'row',
                    // paddingRight: -6,
                }}>
                    
                    <TextInputVerify />
                    <TextInputVerify />
                    <TextInputVerify />
                    <TextInputVerify />
                    <TextInputVerify />
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate(UserScreenEnum.LoginScreen) }} activeOpacity={0.5} style={SigncodeStyle.viewNext}>
                    <View>
                        <Text style={SigncodeStyle.textbtnSignup}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default SignCodeScreen;