import * as React from "react";
import {
  Text,
  Image,
  Pressable,
  View,
  StatusBar,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import styles from '../style/NewCardStyle'


const NewCardScreen = (): React.JSX.Element => {
  return (
    <View style={styles.newCard}>
      <Text style={styles.newCard1}>New Card</Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow.png")}
      />
      <Text style={[styles.cardNumber, styles.cardTypo]}>Card number</Text>
      <Text style={[styles.expiryDate, styles.cardTypo]}>Expiry Date</Text>
      <Text style={[styles.ccv, styles.cardTypo]}>CCV</Text>
      <RNPTextInput
        style={[styles.newCardChild, styles.newCardLayout]}
        placeholder="   xxxx xxxx xxxx xxxx"
        mode="outlined"
        placeholderTextColor="#ac8e71"
        theme={{ colors: { text: "#ac8e71" } }}
      />
      <RNPTextInput
        style={[styles.newCardItem, styles.newCardLayout]}
        placeholder="   MM/YY"
        mode="outlined"
        placeholderTextColor="#ac8e71"
        theme={{ colors: { text: "#ac8e71" } }}
      />
      <RNPTextInput
        style={[styles.newCardInner, styles.newCardLayout]}
        placeholder="   ****"
        mode="outlined"
      />
      <Pressable style={styles.rectangleParent} >
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Text style={[styles.addCard, styles.cardTypo]}>Add Card</Text>
      </Pressable>
      <StatusBar barStyle="default" />
    </View>
  );
};



export default NewCardScreen;
