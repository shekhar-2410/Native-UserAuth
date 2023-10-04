import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { StatusBar } from "expo-status-bar";
const LandingScreen = ({ navigation }) => {
  const { login, error } = useContext(AuthContext);
  return (
    <ImageBackground
      source={require("../assets/onboarding.jpg")} // Set the background image source here
      style={styles.backgroundImage}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.testStyle}>GAMEON</Text>
        <View style={styles.imageConatiner}></View>

        <View>
          {error ? <Text style={styles.errorMessage}>{`${error} Login again !`}</Text> : null}
        </View>
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
  errorMessage: {
    marginTop: -70,
    color: "#fff",
    fontWeight:"600",
    fontSize:16
  },
});
