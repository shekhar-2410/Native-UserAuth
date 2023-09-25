import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/onboarding.jpg")} // Set the background image source here
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.testStyle}>GAMEON</Text>
        <View style={styles.imageConatiner}></View>

        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btncontainer}
          android_ripple
        >
          <Text style={styles.btnText}>Let's Begin</Text>
          <AntDesign name="right" size={33} color="#fff" />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // You can set the resizeMode according to your preference
  },
  container: {
    flex: 1,
    backgroundColor: "transparent", // Make the background of the container transparent
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  testStyle: {
    fontSize: 39,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    color: "#C54B5A", // Set the text color to be visible on the background image
  },
  btncontainer: {
    backgroundColor: "#C54B5A",
    padding: 12,
    borderRadius: 6,
    elevation: 4,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    fontSize: 21,
    color: "#fff",
    marginTop: 2,
    fontWeight: "bold",
  },
  image: {
    width: 350,
    height: 350,
    transform: [{ rotate: "-15deg" }],
  },
  imageConatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
