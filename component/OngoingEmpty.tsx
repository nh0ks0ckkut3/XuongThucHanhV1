import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'
import font from '../contains/font'

const OngoingEmpty = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view_img}>
                <Image style={styles.vector_bg_cloud} source={require('../images/bg_cloud.png')} />
                <Image style={styles.vector_shadow} source={require('../images/img_orders/vector_shadow.png')} />
                <Image style={styles.vector_top_hair} source={require('../images/img_orders/vector_top_hair.png')} />
                <Image style={styles.vector_hair} source={require('../images/img_orders/vector_hair.png')} />
                <Image style={styles.vector_face} source={require('../images/img_orders/vector_face.png')} />
                <Image style={styles.vector_arm_right} source={require('../images/img_orders/vector_arm_right.png')} />
                <Image style={styles.vector_body} source={require('../images/img_orders/vector_body.png')} />
                <Image style={styles.vector_leg} source={require('../images/img_orders/vector_leg.png')} />
                <Image style={styles.vector_foot_right} source={require('../images/img_orders/vector_foot_right.png')} />
                <Image style={styles.vector_foot_left} source={require('../images/img_orders/vector_foot_left.png')} />
                <Image style={styles.vector_draw_leg} source={require('../images/img_orders/vector_draw_leg.png')} />
                <Image style={styles.vector_box2} source={require('../images/img_orders/vector_box2.png')} />
                <Image style={styles.vector_arm_left} source={require('../images/img_orders/vector_arm_left.png')} />
                <Image style={styles.vector_draw_shouder_left} source={require('../images/img_orders/vector_draw_shouder_left.png')} />
                <Image style={styles.vector_draw_shouder_right} source={require('../images/img_orders/vector_draw_shouder_right.png')} />
                <Image style={styles.vector_box1} source={require('../images/img_orders/vector_box1.png')} />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>
                    There is n ongoing order right now.{"\n"}You can order from home
                </Text>
            </View>

        </SafeAreaView>
    )
}

export default OngoingEmpty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : color.white
    },
    view_img: {
        position: 'relative',
        marginHorizontal: 24,
        top: 73.5,
        height: 335.8
    },
    viewText : {
        width : 310,
        height : 38,
        marginHorizontal : 32,
        marginTop : 90
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: font.fontFamily_primary,
        color: color.saddlebrown,
        letterSpacing: 0.6
    },
    vector_bg_cloud: {
        position: 'absolute',
        top: 8,
        left: 47
    },
    vector_top_hair: {
        position: 'absolute',
        top: 3,
        right: 80
    },
    vector_hair: {
        position: 'absolute',
        top: 9.25,
        right: 82
    },
    vector_face: {
        position: 'absolute',
        top: 13,
        right: 67.5
    },

    vector_arm_right: {
        position: 'absolute',
        top: 72,
        right: 107
    },
    vector_body: {
        position: 'absolute',
        top: 23.5,
        right: 30
    },
    vector_leg: {
        position: 'absolute',
        top: 82.3,
        right: 28
    },
    vector_arm_left: {
        position: 'absolute',
        top: 65,
        right: 41
    },
    vector_draw_shouder_left: {
        position: 'absolute',
        top: 48,
        right: 73
    },
    vector_draw_shouder_right: {
        position: 'absolute',
        top: 56.5,
        right: 118
    },
    vector_draw_leg: {
        position: 'absolute',
        bottom: 40,
        right: 63
    },
    vector_foot_left: {
        position: 'absolute',
        bottom: 8,
        right: 30
    },
    vector_foot_right: {
        position: 'absolute',
        bottom: 6,
        right: 65
    },
    vector_box1: {
        position: 'absolute',
        bottom: 6,
        left: 20
    },
    vector_box2: {
        position: 'absolute',
        top: 72,
        right: 116
    },
    vector_shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
})