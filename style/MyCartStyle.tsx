import { StyleSheet } from "react-native";
import color from "../contains/color";

const styles =StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    viewArrow:{
        position: "relative"
    },
    bgCloud : {
        position : 'absolute',
        top : 0,
        zIndex : 15
      },
    imgArrow: {
        position: "absolute",
        marginTop: 30,
        marginLeft: 20
    },
    imgGroup: {
        position: "absolute",
        top: 30,
        left: 360
    },
    textTitle: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        color: "#FF5E00",
        marginTop: 74
    },
    viewVector: {
        marginTop : 50,
        marginBottom : 50,
        position: "relative",
        width : 302,
        marginStart : 35,
        height : 311,
    },
    imgVector1: {
        position: "absolute",
        top: 86.83,
        left: 36.24,  
    },
    imgVector2: {
        position: "absolute",
        top: 183,
        left: 95
    },
    imgVector3: {
        position: "absolute",
        top: 132,
        left: 83,
    },
    imgVector4: {
        position: "absolute",
        top: 156,
        left: 89
    },
    imgVector5: {
        position: "absolute",
        top: 283,
        left: 55
    },
    textCard: {
        color: "#6D3805",
        fontSize: 20,
        fontWeight: "700",
        textAlign:"center",
    },
    text: {
        color: "#6D3805",
        fontSize: 16,
        marginLeft: 61,
        textAlign:"center",
        marginTop: 11,
        width: 273, 
    }

})

export default styles