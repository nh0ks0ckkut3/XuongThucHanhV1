import { StyleSheet } from "react-native";
import font from '../contains/font'
import color from '../contains/color'


const styles = StyleSheet.create({
    cardTypo: {
      textAlign: "left",
      fontSize: 18,
      fontFamily: font.fontFamily_primary,
      fontWeight: "700",
      position: "absolute",
    },
    newCardLayout: {
      height: 48,
      width: 343,
      position: "absolute",
    },
    parentPosition: {
      bottom: "50%",
      position: "absolute",
    },
    cartTypo: {
      fontFamily: font.fontFamily_primary,
      fontWeight: "500",
      fontSize: 10,
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
    },
    iconPosition: {
      top: "0%",
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    barhomelitPosition: {
      left: "0%",
      right: "0%",
      width: "100%",
    },
    frmPosition: {
      left: 0,
      width: 375,
      top: 0,
      position: "absolute",
    },
    newCard1: {
      top: 74,
      left: 133,
      fontSize: 24,
      textAlign: "center",
      color: color.primary,
      fontFamily: font.fontFamily_primary,
      fontWeight: "700",
      letterSpacing: 0,
      position: "absolute",
    },
    arrowIcon: {
      marginTop: -351,
      left: 20,
      width: 8,
      height: 14,
      top: "50%",
      position: "absolute",
    },
    cardNumber: {
      top: 149,
      color: color.saddlebrown,
      left: 16,
    },
    expiryDate: {
      top: 257,
      color: color.saddlebrown,
      left: 16,
    },
    ccv: {
      top: 365,
      left: 13,
      color: color.saddlebrown,
    },
    newCardChild: {
      top: 172,
      left: 16,
    },
    newCardItem: {
      top: 280,
      left: 13,
    },
    newCardInner: {
      top: 388,
      left: 13,
    },
    rectangleIcon: {
      right: 0,
      borderRadius: 30,
      top: 0,
      height: 50,
      width: 343,
      position: "absolute",
    },
    addCard: {
      top: 14,
      left: 132,
      color: color.white,
      letterSpacing: 0,
      fontSize: 18,
    },
    rectangleParent: {
      top: 661,
      right: 17,
      height: 50,
      width: 343,
      position: "absolute",
    },
    newCard: {
      backgroundColor: color.white,
      flex: 1,
      height: 812,
      overflow: "hidden",
      width: "100%",
    },
  });
  export default styles;