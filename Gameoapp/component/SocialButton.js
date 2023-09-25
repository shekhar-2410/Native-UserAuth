import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const SocialButton = ({ name, color }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#C6C6C6",
          padding: 6,
          borderRadius: 4,
          width: 80,
          alignItems: "center",
          backgroundColor: "#FCFCFC",
          elevation: 2,
        }}
      >
        <AntDesign name={name} size={21} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
